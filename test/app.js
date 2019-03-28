import React from 'react';
import ReactDOM from 'react-dom';

import { TextField } from '@implicit/inputs';
import { useForm } from '@implicit/form';

import { useDialog } from '../src/hooks/useDialog';
import { useMenu } from '../src/hooks/useMenu';
import { useElementArray } from '../src/hooks/useElementArray';
import DialogFormContent from '../src/comps/DialogFormContent';
import DialogContent from '../src/comps/DialogContent';
import Dialog from '../src/comps/Dialog';
import Menu from '../src/comps/Menu';
import List from '../src/comps/List';


import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';


function Dialog1({ dialog: { state: { message }, close } }) {

  console.log('render Dialog1');

  return (
    <DialogContent onClose={close} title="Hello Dialog">
      <DialogContentText>{message} asdasdasdasdsad
        asdasdasdasdsad
        asdasdasdasdasdasdasdasddddddddddd
         asdasdsads asdasd                  asdasdasdasdasd asdasdasdasdasd
         asdasd
      
      </DialogContentText>
    </DialogContent>
  );
}
Dialog1 = React.memo(Dialog1);

function validateForm({ firstname, data }) {
  if (firstname && data?.address?.city)
  if (firstname === data.address.city) return {
    firstname: 'Firstname must be distinct from city',
    data: {
      address: {
        city: 'City must be distinct from firstname'
      }
    }
  };
  return undefined;
}

async function handleSubmit(values) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(values);
  if (values.firstname === 'John') return 'John is invalid firstname';
}

const initialize = () => ({
  firstname: 'John',
  friends: [
    {
      firstname: 'John',
      lastname: 'Cooper'
    }
  ]
});

function Dialog2({ state: { message }, close }) {

  console.log('render Dialog2');
  const form = useForm(handleSubmit, initialize, validateForm, close);

  return (
    <DialogFormContent form={form} onClose={close} title="Title 1">
      <div>{message}</div>
      <div>
        <TextField comp={form} name="firstname" />
      </div>
      <div>
        <TextField comp={form} name="lastname" />
      </div>
    </DialogFormContent>
  );
}
Dialog2 = React.memo(Dialog2);

function Menu1({ close, data: [openDialog1, openDialog2], state: { message } }) {

  console.log('render Menu1');

  return (
    <>
      <MenuItem onClick={() => { close(); openDialog1({ message }); }}>open dialog 1</MenuItem>
      <MenuItem onClick={() => { close(); openDialog2({ message }); }}>open dialog 2</MenuItem>
    </>
  );
}
Menu1 = React.memo(Menu1, () => true);

const data = [
  {
    name: 'John',
    role: 'Admin'
  },
  {
    name: 'Jack',
    role: 'Admin'
  },
  {
    name: 'Peter',
    role: 'Moderator'
  }
];

const UserView = [
  function UserItemView(user, [dialog1]) {
    return (
      <ListItem key={user.name}>
        <div>
          <div>
            {user.name}
          </div>
          <div>
            {user.role}
          </div>
        </div>
        <div>
          <button onClick={() => dialog1.open({ message: user.name })}>edit</button>
        </div>
      </ListItem>
    );
  },
  user => user.name
];

const theme = createMuiTheme({});

function App() {

  console.log('render App');

  const dialog1 = useDialog();
  const dialog2 = useDialog();
  const menu1 = useMenu([dialog1.open, dialog2.open]);
  const users = useElementArray(UserView, data, [dialog1, dialog2]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <button onClick={() => dialog1.open({ message: 'hello Dialog' })}>open dialog</button>
        <button onClick={() => dialog2.open({ message: 'hello FormDialog' })}>open form dialog</button>
        <div>
          <button onClick={event => menu1.open(event, { message: 'lalala' })}>open context menu 1</button>
          <button onClick={menu1.open}>open context menu 2</button>
        </div>
        <List>
          {users}
        </List>
        <Dialog store={dialog1}>
          <Dialog1 dialog={dialog1} />
        </Dialog>
        <Dialog store={dialog2}>
          {Dialog2}
        </Dialog>
        <Menu store={menu1}>
          {Menu1}
        </Menu>
        
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
