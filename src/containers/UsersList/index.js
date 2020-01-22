import React,{ useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Grid, TablePagination, InputBase, Paper, IconButton, Box, Icon, CircularProgress } from '@material-ui/core';
import { UserItem } from "../../components/UserItem";
import { config } from "../../constants";
import { useStyles } from "./style";

const UsersList = props => {
  //Initialize state
  const [gridLayout, setGridLayout] = useState('LIST');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(config.RECORDS_PER_PAGE);
  const [search, setSearch] = useState('');
  const {getAllUsers, users, loader} = props;
  const classes = useStyles();

  useEffect(() => {
    //fetch all users
    getAllUsers();    
  },[getAllUsers]);

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle no. of row change
  const handleRowsPerPage = event => {
    setRowsPerPage(event.target.value);    
    setPage(0);
  };
    
  let filteredUsers = [...users];

  //Search users
  filteredUsers = filteredUsers.filter(user=> {      
      return `${user.name.first} ${user.name.last}`.toLowerCase().includes(search.toLowerCase()) 
      || user.location.city.toLowerCase().includes(search.toLowerCase())
      || user.email.toLowerCase().includes(search.toLowerCase())
      || user.location.state.toLowerCase().includes(search.toLowerCase())
  });
  
  //Total records
  const totalRecords = filteredUsers.length;

  //Apply pagination
  filteredUsers = filteredUsers.splice(page * rowsPerPage, rowsPerPage);
  
  return (
    loader === true ?
      <CircularProgress className={classes.loader}/>
    :
      <div className={classes.root}>           
        <Box className={classes.gridLayoutIcons} display={{ xs: 'none', lg: 'block' }}>
            <Icon onClick={() => {setGridLayout('LIST')}} color={gridLayout === "LIST" ? "secondary":"inherit"}>format_list_bulleted</Icon>
            <Icon onClick={() => {setGridLayout('GRID')}} color={gridLayout === "GRID" ? "secondary":"inherit"}>apps</Icon>
        </Box>
        <Paper component="form" className={classes.searchBox}>                  
          <InputBase
            className={classes.searchInput}
            placeholder="Search"
            inputProps={{ 'aria-label': 'Search' }}
            value={search}
            onChange={(event)=>{setSearch(event.target.value); setPage(0);}}
          />
          <IconButton type="submit" className={classes.searchIconButton} aria-label="search">
            <Icon>search</Icon>
          </IconButton>        
        </Paper>
        
        <Grid container>        
          {
            filteredUsers.length > 0 ? (
              filteredUsers.map((userData, index) => (     
                <Grid key={index} item xs={12} sm={6} md={4} lg={gridLayout === "LIST" ? 12 : 3} className={gridLayout === "LIST" ? classes.listLayout : classes.gridLayout}>     
                  <UserItem userData={userData} gridLayout={gridLayout} />
                </Grid>
              ))
            )
            :(
              <Paper className={classes.noRecord}>No records found</Paper>
            )
          }
        </Grid>
        <div className={classes.pagination}>        
            <TablePagination
                rowsPerPageOptions={[20, 40, 60, 80, 100]}
                component="div"
                count={totalRecords}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleRowsPerPage}
            />
        </div>
      </div>
  );
}

const mapStateToProps = state => {
  const {
    users:{usersList, loader}
  } = state;
  return { users:usersList, loader:loader };
};

const mapDispatchToProps = dispatch => ({
  getAllUsers: payload => dispatch({ type: "FETCH_USERS", payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);