import {makeStyles}  from '@material-ui/core';
export const useStyles = makeStyles(theme => ({
    root: {
      width: '80%',
      margin: '2% 10%',
      textAlign: 'left'
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    searchBox: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',    
      float: "right",
      marginRight: "10px"
    },
    searchInput: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    searchIconButton: {
      padding: 10,
    },
    loader: {
      marginTop: "10%"
    },
    noRecord: {
      fontWeight : "bold",
      textAlign : "center"
    },
    usersAction:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      '& > div:first-child': {
        paddingRight: '12px'          
      }
    },
    [theme.breakpoints.up('lg')]: {
      gridLayoutIcons : {
        '& > span': {
          paddingRight: '12px',
        }
      },
      listLayout: {
        display: 'block',
        '& > div': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 15px',
          '& .MuiCardMedia-root': {
            borderRadius: '50%',
            width: '100px',
            height: '100px'
          },
          '& .MuiCardContent-root': {
            boxSizing: 'border-box',
            flex: '0 0 90%',
            maxWidth: '90%',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '30px',
            paddingBottom: '16px',
            '& > *': {
              boxSizing: 'border-box',
              flex: '0 0 33.33%',
              maxWidth: '33.33%',
              padding: '0 15px'
            },
            '& h2': {
              fontWeight: 'bold',
              margin: '0'
            }
          }
        }
      }
    },
    [theme.breakpoints.down('lg')]: {
      listLayout: {
        display: 'flex',
        '& > div': {
          width: '100%'
        }
      }
    },
    [theme.breakpoints.down('sm')]: {
      root: {
        width: '100%',
        margin: '25px auto',
        '& .MuiTypography-root': {
          wordBreak: 'break-all',
          '& .material-icons': {
            marginLeft: '0'
          }
        }
      }
    }
  }));