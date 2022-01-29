import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from "../../assets/images/back-header.jpg";
import Logo from "../../assets/images/logo.png";
import Hyper from "../../assets/images/Hyper.jpg"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme, createTheme, makeStyles} from '@mui/material/styles';
import {CardMedia, IconButton, ImageList, Link} from "@mui/material";
import {styled, alpha} from '@mui/material/styles';
import {
    ShoppingBagOutlined,
    PersonOutline,
    LocationOnOutlined, QueryBuilder, GridViewOutlined, ExpandMore,
} from "@mui/icons-material";


//
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: purple[500],
//         },
//         secondary: {
//             main: green[500],
//         },
//     },
// });

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: "5rem",
    backgroundColor: alpha(theme.palette.common.white,1),
    width: '100%',
    fontSize: "2rem",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',

    },
    [theme.breakpoints.down('sm')]: {
        height:"2rem"
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color:"black"
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(5)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20rem',
        },[theme.breakpoints.down('sm')]: {
            width: '80%',
        },
    },
}));

// const useStyle = makeStyles(theme => {
//     return{
//         toolbar:{
//             height: '20rem',
//             backgroundImage: `url(${Image})`,
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             backgroundSize: "100% 20rem",
//             display: 'flex',
//             flexDirection: 'column',
//         },
//
//     }
// })
// const styles = (theme) => ({
//         toolbar:{
//             height: '20rem',
//             backgroundImage: `url(${Image})`,
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             backgroundSize: "100% 20rem",
//             [theme.breakpoints.down('sm')]: {
//                 height: '10rem',
//             },
//
//
//         },
// });


const HomeHeader = () => {
    const style = {
        headerBackground: {
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% 20rem",
        }
    };
    const theme = useTheme();
    // const classes = styles(theme);

    return (

        <AppBar position="static">

            <Toolbar  sx={{display: 'flex',
                flexDirection: 'column',height: "20rem", backgroundImage: `url(${Image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100% 20rem",
                [theme.breakpoints.down('sm')]: {
                    height: "15rem"
            }}}>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(250, 251, 252,0.1)',
                    width: '100%',
                    marginTop: "1rem",
                    [theme.breakpoints.down('sm')]:{
                        marginTop: "0",
                    },
                }}>

                    <Box sx={{display: 'flex', alignItems: "center", marginBottom: "0.8rem",
                        }}>
                        <Button
                            sx={{display: {xs: "none", sm: "flex"}}}
                            style={{
                                backgroundColor: "white",
                                color: "blue",
                                border: "none",
                                width: "12rem",
                                fontSize: "1.4rem",
                                height: "3rem",

                            }}
                            variant="contained" endIcon={<ShoppingBagOutlined/>}
                            size="large"
                        >
                            سبد خرید
                        </Button>

                        <Button variant="outlined" style={{fontSize: "2rem", border: "none"}}>
                            <Typography sx={{display: {xs: "none", sm: "flex"}, overflow: "auto"}}> ورود /
                                عضویت</Typography>
                            <IconButton aria-label="login" size="5rem">
                                <PersonOutline sx={{color:"white",textUnderlineOffset:"none" ,[theme.breakpoints.down('sm')]: {
                                        fontSize:"1.5rem"
                                    } }}/>
                            </IconButton>
                        </Button>
                    </Box>

                    <Box sx={{display: 'flex', alignItems: "center"}}>

                        <Link href="#" underline="none">
                            <Typography sx={{fontSize: "1.7rem", display:"flex",alignItems:"center",color:"white",
                                [theme.breakpoints.down('sm')]: {
                                fontSize:"0.9rem",overflow: "auto",
                            },}}>
                                <ExpandMore/>
                                تهران،میدان انقلاب اسلامی
                                <IconButton>
                                    <LocationOnOutlined sx={{color:"white" ,fontSize:"0.7rem"}}/>
                                </IconButton>
                            </Typography>
                        </Link>

                        <Box sx={{width: "5rem", height: "5rem",
                            [theme.breakpoints.down('sm')]: {
                                width: "3rem", height: "3rem",
                            },}}>
                            <img
                                style={{
                                    width: "3.5rem", height: "3.5rem",
                                }}
                                 src={Logo}
                                 alt="اسنپ مارکت"
                            />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{display: 'flex', justifyContent: 'space-between', width: "100%", marginTop: "1rem",
                    [theme.breakpoints.down('sm')]: {
                    flexDirection:'column',
                        borderBottom: '1px solid rgba(250, 251, 252,0.1)',
                        alignItems:'flex-end',
                        paddingBottom:"0.9rem"
                    },}}>

                    <Box sx={{marginLeft: "10rem"
                            ,[theme.breakpoints.down('sm')]: {
                            marginLeft: '0',order:"2"

                        }
                    }}>
                        <Typography sx={{display: "flex", alignItems: "center", fontSize: "1.5rem",
                            [theme.breakpoints.down('sm')]: {
                            fontSize: '0.7rem',

                        },}}>

                            تحویل از امروز ساعت 11
                            <QueryBuilder fontSize="large" sx={{display: {xs: "none", sm: "flex"}}}/>
                        </Typography>
                    </Box>

                    <Box sx={{display: 'flex', alignItems: "center",
                            [theme.breakpoints.down('sm')]: {
                                 marginBottom:"0.5rem",
                                order:"1"
                    },}}>

                        <Box sx={{marginRight: "2rem" ,
                            [theme.breakpoints.down('sm')]: {
                            marginRight:"0.5rem",
                        },}}>
                            <Button sx={{
                                width: "10rem",
                                backgroundColor: "white",
                                color: "blue",
                                borderRadius: "20rem",
                                fontSize: "1rem",
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '0.5rem',
                                    width: "6rem",
                                },
                            }} variant="contained" startIcon={<ExpandMore/>}>
                                تغییر فروشگاه
                            </Button>
                        </Box>

                        <Box sx={{display: 'flex', alignItems: "center"}}>
                            <Typography sx={{fontSize: "2rem",marginRight: "1rem",
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '0.7rem',
                                    marginRight:"0.5rem"
                                },}}>
                                <span style={{display: {xs: "none", sm: "flex"}}}>
                                    خرید از
                                </span>
                                هایپراستار صبا
                            </Typography>

                            <Box sx={{width: "5rem", height: "5rem",
                                [theme.breakpoints.down('sm')]: {
                                    width: "2rem", height: "2rem",
                                },}}>
                                <img style={{width: "2rem", height: "2rem", borderRadius: "50%",
                                    }}
                                     src={Hyper}
                                     alt="هایپر استار"
                                />
                            </Box>

                        </Box>
                    </Box>

                </Box>

                <Box sx={{display: 'flex', width: '100%', justifyContent: "flex-end", marginTop: "2rem"}}>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="جست و جوی برند یا محصول"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                    <Button variant="contained" style={{
                        width: "10rem",
                        height: "3rem",
                        backgroundColor: "white",
                        color: "blue",
                        fontSize: "1rem"
                    }}
                            sx={{display: {xs: "none", md: "flex"}}}>
                        دسته بندی ها
                        <GridViewOutlined/>
                    </Button>
                </Box>

            </Toolbar>

        </AppBar>
    );
};
export default HomeHeader;

