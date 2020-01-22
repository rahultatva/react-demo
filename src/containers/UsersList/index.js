import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
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
  const [sort, setSort] = useState('ASC');

  const classes = useStyles();
  const dispatch = useDispatch();

  const usersResponse = useSelector(state=>state.users);
  const users = usersResponse.usersList;
  const loader = usersResponse.loader;
  useEffect(() => {
      dispatch({ type: "FETCH_USERS"});    
  },[dispatch]);

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
  
  //sort users
  if(sort === "ASC"){
    filteredUsers = filteredUsers.sort((a,b) => `${a.name.first} ${a.name.last}`.localeCompare(`${b.name.first} ${b.name.last}`));
  }else {
    filteredUsers = filteredUsers.sort((a,b) => `${b.name.first} ${b.name.last}`.localeCompare(`${a.name.first} ${a.name.last}`));
  }

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
        <div className={classes.usersAction}>
          {/* Icons for Grid / List layout & sort */}       
          <Box className={classes.sorttingIcon}>
              <Icon onClick={() => { setPage(0); setSort(sort === "ASC" ? "DESC" : "ASC")}} color={sort === "ASC" ? "secondary":"inherit"}>sort_by_alpha</Icon>
          </Box>
          <Box className={classes.gridLayoutIcons} display={{ xs: 'none', lg: 'block' }}>            
              <Icon onClick={() => {setGridLayout('LIST')}} color={gridLayout === "LIST" ? "secondary":"inherit"}>format_list_bulleted</Icon>
              <Icon onClick={() => {setGridLayout('GRID')}} color={gridLayout === "GRID" ? "secondary":"inherit"}>apps</Icon>
          </Box>
          
          {/* Search box */}       
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
        </div>
        
        {/* Users List */}       
        <Grid container>        
          {
            filteredUsers.length > 0 ? (
              filteredUsers.map((userData, index) => (     
                <Grid key={index} item xs={12} sm={6} md={4} lg={gridLayout === "LIST" ? 12 : 3} className={gridLayout === "LIST" ? classes.listLayout : classes.gridLayout}>     
                  <UserItem userData={userData} />
                </Grid>
              ))
            )
            :(
              <Paper className={classes.noRecord}>No records found</Paper>
            )
          }
        </Grid>

        {/* Pagination */}       
        <div className={classes.pagination}>        
            <TablePagination
                rowsPerPageOptions={[5, 10, 20, 40, 60, 80, 100]}
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

export default UsersList;