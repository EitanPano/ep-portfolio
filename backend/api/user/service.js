import dbService from '../../services/db.service.js';
import { ObjectId } from 'mongodb';
import logger from '../../services/logger.service.js';

async function query(filterBy = {}) {
    // const criteria = _buildCriteria(filterBy);
    try {
        // Assign fake users
        let users = [{name:'Saba', age: 55}, {name:'Moz', age: 23}]
        
        // const collection = await dbService.getCollection('user');
        // let users = await collection.find(criteria).toArray();
        // users = users.map((user) => {
        //     delete user.password;
        //     user.createdAt = ObjectId(user._id).getTimestamp();
        //     return user;
        // });
        return users;
    } catch (err) {
        logger.error('cannot find users', err);
        throw err;
    }
}

async function getById(userId) {
    try {
        const collection = await dbService.getCollection('user');
        const user = await collection.findOne({ _id: ObjectId(userId) });
        delete user.password;
        return user;
    } catch (err) {
        logger.error(`while finding user ${userId}`, err);
        throw err;
    }
}

async function getByName(name) {
    try {
        const usernameQry = {username: { '$regex': `^${name}$`, '$options': 'i'}}
        const emailQry = {email: { '$regex': `^${name}$`, '$options': 'i'}}
        const query = { "$or": [usernameQry, emailQry] }

        const collection = await dbService.getCollection('user');
        const user = await collection.findOne(query);
        return user;
    } catch (err) {
        logger.error(`while finding user ${userName}`, err);
        throw err;
    }
}
// const user = await collection.findOne({ "or": [{username: name}, {email: name}] });

async function add(userCreds) {
    try {
        const collection = await dbService.getCollection('user');
        // console.log(userCreds);
        const user = await collection.insertOne(userCreds);
        return user;
    } catch (err) {
        logger.error('cannot insert user', err);
        throw err;
    }
}

async function update(user) {
    try {
        // peek only updatable fields!
        const _id = ObjectId(user._id);
        const collection = await dbService.getCollection('user');
        await collection.updateOne({ _id }, { $set: { ...user } });
        return user;
    } catch (err) {
        logger.error(`cannot update user ${user._id}`, err);
        throw err;
    }
}

async function remove(userId) {
    try {
        const collection = await dbService.getCollection('user');
        await collection.deleteOne({ _id: ObjectId(userId) });
    } catch (err) {
        logger.error(`cannot remove user ${userId}`, err);
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.txt) {
        const txtCriteria = { $regex: filterBy.txt, $options: 'i' };
        criteria.$or = [
            {
                username: txtCriteria,
            },
            {
                fullname: txtCriteria,
            },
        ];
    }
    if (filterBy.minBalance) {
        criteria.balance = { $gte: filterBy.minBalance };
    }
    return criteria;
}

export default {
    query,
    getById,
    getByName,
    add,
    update,
    remove,
};
