import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { colors } from '@mui/material';

export function NavbarComponent() {
    const [modal, setModal] = useState(false);
    const modalOpen = () => setModal(true);
    const modalClose = () => setModal(false);

    return (
        <div>
            <AppBar position="static" sx={{backgroundColor: "#EEF7FF",borderBottom: '1px solid #615EFC',backdropFilter: 'none',}}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: "#615EFC" }}>
                        BookShelf
                    </Typography>
                    <Button variant="contained" sx={{color:"#EEF7FF",backgroundColor:"#615EFC"}} onClick={modalOpen}>add</Button>
                </Toolbar>
            </AppBar>
            <Dialog open={modal} onClose={modalClose}>
                <DialogTitle>Add a new book</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add a new book to your bookshelf, please enter the book details here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Book Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={modalClose} sx={{color:"#615EFC"}}>
                        cancel
                    </Button>
                    <Button onClick={modalClose} sx={{color:"#615EFC"}}>
                        add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
