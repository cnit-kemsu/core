import React from 'react';
import ReactDOM from 'react-dom';

import { TextField } from '@kemsu/inputs';
import { useForm } from '@kemsu/form';

import { useDialog } from '../src/hooks/useDialog';
import { useMenu } from '../src/hooks/useMenu';
import { useElementArray } from '../src/hooks/useElementArray';
import Dialog from '../src/comps/Dialog';
import FormDialog from '../src/comps/FormDialog';
import Form from '../src/comps/Form';
import ConfirmDialog from '../src/comps/ConfirmDialog';
import DialogModal from '../src/comps/DialogModal';
import MenuModal from '../src/comps/MenuModal';
import List from '../src/comps/List';
import Paper from '../src/comps/Paper';

import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';

function Dialog1({ dialog: { close, props: { message } } }) {

  console.log('render Dialog1');

  return (
    <Dialog onClose={close} title="Hello Dialog">
      <DialogContentText>{message} asdasdasdasdsad
        asdasdasdasdsad
        asdasdasdasdasdasdasdasddddddddddd
         asdasdsads asdasd                  asdasdasdasdasd asdasdasdasdasd
         asdasd
      
      </DialogContentText>
    </Dialog>
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

function Dialog2(close, { message }) {

  console.log('render Dialog2');
  const form = useForm(handleSubmit, initialize, validateForm, close);

  return (
    <FormDialog form={form} onClose={close} title="Title 1" actions="reset-submit">
      <div>{message}</div>
      <div>
        <TextField style={{ width: '400px' }} comp={form} name="firstname" />
      </div>
      <div>
        <TextField style={{ width: '400px' }} comp={form} name="lastname" />
      </div>
    </FormDialog>
  );
}

function Dialog3(close, { message }) {

  console.log('render Dialog3');

  return (
    <ConfirmDialog onClose={close} title="Confirm Dialog">
      <DialogContentText>
        {message}
      </DialogContentText>
    </ConfirmDialog>
  );
}

function Menu1(close, { dialog1, dialog2, message }) {

  console.log('render Menu1');

  return (
    <>
      <MenuItem onClick={() => { close(); dialog1.open({ message }); }}>open dialog 1</MenuItem>
      <MenuItem onClick={() => { close(); dialog2.open({ message }); }}>open dialog 2</MenuItem>
    </>
  );
}

const data = {
  users: [
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
  ]
};

function UserView({ name, role }, { dialog1 }) {
  return (
    <ListItem>
      <div>
        <div>
          {name}
        </div>
        <div>
          {role}
        </div>
      </div>
      <div>
        <button onClick={() => dialog1.open({ message: name })}>edit</button>
      </div>
    </ListItem>
  );
}

const theme = createMuiTheme({});

function App() {

  console.log('render App');

  const form = useForm(handleSubmit, initialize, validateForm);

  const dialog1 = useDialog();
  const dialog2 = useDialog();
  const dialog3 = useDialog();
  const menu1 = useMenu({ dialog1, dialog2 });
  const users = useElementArray(UserView, data.users, { dialog1, key: user => user.name });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <button onClick={() => dialog1.open({ message: 'hello Dialog' })}>open dialog</button>
        <button onClick={() => dialog2.open({ message: 'hello FormDialog' })}>open form dialog</button>
        <button onClick={() => dialog3.open({ message: 'Are you sure???' })}>open confirm dialog</button>
        <div>
          <button onClick={event => menu1.open(event, { message: 'lalala' })}>open context menu 1</button>
          <button onClick={menu1.open}>open context menu 2</button>
        </div>

        <List>
          {users}
        </List>

        <Paper style={{ width: '600px' }}>
          <Form form={form} title="Some Form" actions='submit'>
            <div>
              <TextField style={{ width: '500px' }} comp={form} name="firstname" />
            </div>
            <div>
              <TextField style={{ width: '500px' }} comp={form} name="lastname" />
            </div>
          </Form>  
        </Paper>
        

        <DialogModal mgr={dialog1}>
          <Dialog1 dialog={dialog1} />
        </DialogModal>

        <DialogModal mgr={dialog2}>
          {Dialog2}
        </DialogModal>

        <DialogModal mgr={dialog3}>
          {Dialog3}
        </DialogModal>

        <MenuModal mgr={menu1}>
          {Menu1}
        </MenuModal>
        
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
