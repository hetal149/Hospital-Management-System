import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
 
  appBar: {
    fontFamily: 'Helvetica Neue Light',

    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#0f0f3e',
    boxShadow:'2px 5px 10px black',
  },
  heading: {
    color: '#fff',
    textDecoration: 'none',
    fontStyle:'italic',
    fontFamily:'system-ui'
    
  },
  
}));