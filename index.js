const yargs = require('yargs');
const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

const argv = yargs(hideBin(process.argv)).argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts().then(console.table);
      break;

    case 'get':
      getContactById(id).then(console.log);
      break;

    case 'add':
      addContact(name, email, phone).then(console.log);
      break;

    case 'remove':
      removeContact(id).then(console.log);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
