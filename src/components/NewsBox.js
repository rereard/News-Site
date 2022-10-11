import {useState, forwardRef, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { addData, removeData } from '../features/savedSlice';
import AlertDialog from './AlertDialog';
import { useSelector, useDispatch } from 'react-redux'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewsBox = (props) => {
    const data = useSelector((state) => state.saved.data)
    const [isSaved, setIsSaved] = useState(false)
    useEffect(() => {
        data.some((d) => d.url === props.url) && setIsSaved(true)
    }, [isSaved]);

    // Dialog Box
    const [openDialog, setOpenDialog] = useState(false);
    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const handlePositiveDialog = (url) => {
        dispatch(removeData(url))
        handleCloseDialog()
        setIsSaved(false)
    }
    
    // Snackbar
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
    const dispatch = useDispatch()
    const handleClick = (newState) => {
        setState({ open: true, ...newState });
    };
    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return(
        <div className="border-2 p-2 rounded-lg mb-3 md:mb-0 animate-fadeInUp break-words">
            <header className="border-b-2">
                <div className="flex justify-between items-center">
                    <h5 className="text-lg w-fit">{props.sourceName}</h5>
                    <button onClick={() => {
                        if(!isSaved){
                            handleClick({
                                vertical: 'bottom',
                                horizontal: 'center'
                            })
                            dispatch(addData(props))
                            setIsSaved(!isSaved)
                        } else{
                            handleClickOpenDialog()
                        }
                    }}>
                        {isSaved ? (
                            <i className="fa-solid fa-bookmark text-xl"></i>
                        ) : (
                            <i className="fa-regular fa-bookmark text-xl"></i>
                        )}
                    </button>
                </div>
                <a target='_blank' href={props.url} rel="noreferrer noopener" className="text-xl font-semibold hover:underline">{props.title}</a>
                <h3 className="mb-2">{props.author}</h3>
            </header>
            <main className="mt-2 mb-4">
                <p>{props.description}</p>
            </main>
            <AlertDialog open={openDialog} handleClose={handleCloseDialog} handlePositive={() => handlePositiveDialog(props.url)} />
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                key={vertical + horizontal}
                autoHideDuration={2000}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    News has been saved!
                </Alert>
            </Snackbar>
        </div>
    )
}
export default NewsBox