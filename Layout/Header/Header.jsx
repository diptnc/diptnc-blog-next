import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import  styles from './Header.module.scss'
import { BiSearchAlt, BiMenu, BiTime } from 'react-icons/bi'
import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoCloseOutline } from 'react-icons/io5'
import Link from 'next/link'
import Image from 'next/image'

import black_logo from '../../assets/logo/diptnc_blogs_black_logo.svg'
import White_logo from '../../assets/logo/diptnc_blogs_white_logo.svg'
import axios from 'axios'

const Header = () => {

    const [showNavBar, setshowNavBar] = useState(false);
    const [search, setSearch] = useState('');
    const [searchValue, setSearchValue] = useState([]);
    const [searchFocus, setSearchFocus] = useState(false);



    useEffect(() => {

//change logo if prefered color scheme is dark
        const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (colorScheme.matches) {
            $('#website_logo').attr('src', black_logo);

        } else {
            $('#website_logo').attr('src', black_logo);
        }
           




        $('#navbar_toggle_btn').on('click', function () {
            // alert('hello');
            $('#navbar').toggleClass(`${styles.show_nav}`);

        });

        $(`.${styles.nav_bar_item} a`).on('click', function () {
            $('#navbar').removeClass(`${styles.show_nav}`);
            setshowNavBar(!showNavBar);
        });

        //hide element on scroll
        $(window).scroll(function () {
            //check if scroll value 
            if ($(window).scrollTop() > 50) {
                $('#topbar').addClass(`${styles.show_topbar}`);
                $('#navbar').removeClass(`${styles.onshow_topbar}`);
            }
            else {
                $('#topbar').removeClass(`${styles.show_topbar}`);
                $('#navbar').addClass(`${styles.onshow_topbar}`);
            }
        })
        function formatAMPM(date) {
            // gets the hours
            var hours = date.getHours();
            // gets the day
            var days = date.getDay();
            // gets the month
            var minutes = date.getMinutes();
            // gets AM/PM
            var ampm = hours >= 12 ? 'pm' : 'am';
            // converts hours to 12 hour instead of 24 hour
            hours = hours % 12;
            // converts 0 (midnight) to 12
            hours = hours ? hours : 12; // the hour '0' should be '12'
            // converts minutes to have leading 0
            minutes = minutes < 10 ? '0' + minutes : minutes;

            // the time string
            var time = hours + ':' + minutes + ' ' + ampm;

            // gets the match for the date string we want
            var match = date.toString().match(/\w{3} \w{3} \d{1,2} \d{4}/);

            //the result
            return match[0] + ' ' + time;
        }
        //time interval 
        setInterval(function () {
            var date = new Date();
            var time = formatAMPM(date);
            $('#time').html(time);
        }, 1000);



        //on focus search input display a field


    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length == 0) {
            setSearchValue([]);
        }


    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        //query
        const query = { "function": "search", "searchquery": search };

        const res = await axios.post(`${process.env.GATSBY_API_FETCH_POST}`, query);
        setSearchValue(res.data);

    }

    const handleOnfocus = () => {
 
            setSearchFocus(true);


        
    }
    // const handleOnBlur = () => {

    //         setSearchFocus(false);

        
    // }
   //onblur search input hide a field using vanilla js
    const handleOnBlur = () => {
        setTimeout(() => {
            // add animation

            setSearchFocus(false);

        }, 500);
    }


    console.log(black_logo);
    return (
        <>
            <header className={`${styles.header}`}>
                <div id="topbar" className={`${styles.topbar}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-8 align-self-center">
                                <div className={`${styles.time}`}>
                                    <BiTime></BiTime>&nbsp;<span id="time" ></span></div>
                            </div>
                            <div className="col-4">
                                <ul className={styles.topbar_social_icons}>
                                    <li className={styles.topbar_text}>Follow me :</li>
                                    <li><Link href="https://www.facebook.com/diptanuchakravarty"><a><IoLogoFacebook></IoLogoFacebook></a></Link></li>
                                    <li><Link href="https://www.instagram.com/diptnc/"><a><IoLogoInstagram></IoLogoInstagram></a></Link></li>
                                    <li><Link href="https://wa.me/message/B3R7OG2ADU76F1"><a><IoLogoWhatsapp></IoLogoWhatsapp></a></Link></li>


                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container">

                    <div className="row ">
                        <div className={`col-sm-4 align-self-center  ${styles.header_col} ${styles.container1}  `}  >
                            <form onSubmit={handleSubmit} id="heda" className={styles.search_form}  onFocus={handleOnfocus} onBlur={handleOnBlur} >
                                < BiSearchAlt className="icon-search2" />
                                <input type="search" name="post_search" value={search} onChange={handleSearch} id="post_search" className={`form-control ${styles.header_search_input_box}`} placeholder="Search..." />
                                  {searchFocus ? <div className={` ${styles.searchResults}`} >
                                {searchValue ? searchValue.map((item, index) => {
                                    return (
                                        <div key={index} className={styles.search_result_item}>
                                            <a href={`/${item.blog_post_title_slug}`}>
                                                <div className={styles.search_result_item_title}> {index + 1}. {item.blog_post_title}</div>

                                            </a>
                                        </div>
                                    )
                                }) : null}


                            </div> : ''}

                            </form>
                          



                        </div>
                        <div className={`col-sm-4  align-self-center ${styles.header_col} ${styles.container2}`}>
                            <div className={`${styles.site_logo_container}`}>

                                <Link href="/"><a><Image id="website_logo" src={black_logo} alt="site logo" srcset="" /></a></Link></div>
                        </div>
                        <div className={`col-sm-4  align-self-center ${styles.header_col} text-end ${styles.container3}`}>
                            <button onClick={() => setshowNavBar(!showNavBar)} id="navbar_toggle_btn" className={`${styles.nav_bar_toggle_button}`}>
                                {showNavBar ? <IoCloseOutline /> : <BiMenu />}
                            </button>


                        </div>
                    </div>
                </div>
            </header>



            <nav id="navbar" className={`${styles.navbar} ${styles.onshow_topbar}`}>

                <ul className={`${styles.nav_bar_ul}`}>
                    <li className={`${styles.nav_bar_item}`}>
                        <Link href="https://diptanuchakraborty.in">Home</Link>
                    </li>

                    <li className={`${styles.nav_bar_item}`}>
                        <Link href="/about">About</Link>
                    </li>

                    <li className={`${styles.nav_bar_item}`}>
                        <Link href="/posts">Blogs & articles</Link>
                    </li>

                    <li className={`${styles.nav_bar_item}`}>
                        <Link href="https://diptanuchakraborty.in/#Contact">Contact us</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Header
