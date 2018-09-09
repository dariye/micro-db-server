# micro-db-server [wip]

A simple database server that writes to a json file using micro. Visit
[micro-db-server](micro-db-server.now.sh) to give it a try.

## Usage

```bash
git clone git@github.com:pauldariye/micro-db-server.git
cd micro-db-server && yarn
yarn dev
```
Visit [localhost:3000](http://localhost:3000)

## Operations

A request to the root path `/` returns a snapshot of the data in the database
file.

### Set

A request to `/set?key=value` will set the `value` for the key `key`.

### Get

A request to `/get?key` will return value at `key` if exists else `404`

## Acknowledgement
- RC
- jsonfile

## License
MIT

