---
sidebar_position: 1
---

# MongoDB

```bash
# connection
mongo -u "myUserAdmin" -p \
--authenticationDatabase "admin" \
--port 27017

# dump
mongodump \
--db=test \
--archive="all-collections.archive"

# restore
mongorestore \
--archive="all-collections.archive" \
--nsFrom='test.*' \
--nsTo='example.*'

# dump > restore
# copy from test to example
mongodump --archive --db=test | mongorestore --archive --nsFrom='test.*' --nsTo='example.*'

# dump from container to localhost
docker exec some-mongo sh -c 'exec mongodump -d <database_name> --archive' > /some/path/on/your/host/all-collections.archive

# params
-u=user
-p=pass
--out=path
--bd
--authenticationDatabase
--archive=mongodump-test-db
```

## Mongoose ODM

### Connection

```javascript
const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1/test'

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(console.error.bind(console, 'MongoDB connection error: '))

mongoose.connection.once('open', () => {
  console.log('MongoDB connected')
})
```

### Schema defined and model creation

```javascript
let schema = new mongoose.Schema({

})

// methods

schema.methods.sayHi = function() {
  console.log('Hi')
}

// mapping collection 'users' in database

let Model = mongoose.model('Model', schema)
```

### Insert

```javascript
let doc = new Model({

  // key-values

})

doc.save((err, doc) => {
  if (err) return console.error(err)

  console.log(doc)
})
```

### Find

```javascript
Model.find({})
```

`mongoose.Types.ObjectId`

### Data Type

Schema, use array of `object`, but array of `string`.
