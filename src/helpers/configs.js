const configs = {
    // host: "http://localhost/webtech_api/back-end/endpoints",
    host: "https://jkuatwebtech.000webhostapp.com/backend/endpoints",    
    brand: "SCIT",
    motto: {
        en: "School of Computing and Information Technology",
        sw: "Shule ya Kompyuta na Teknolojia ya Habari"
    },
    address: {
        email: "scit@mail.com",
        phone: "+254 701 02 0304",
        address: "P.O. Box 62-00200 NAIROBI, KENYA"
    },
    question:{
        en: 'Have any questions?',
        sw: 'Unayo swali?'
    },
    content: {
        email: {en: 'Email', sw: 'Barua pepe'},
        phone: {en: 'Phone', sw: 'Simu'},
        name: {en: 'Name', sw: 'Jina'},
        message: {en: 'Message', sw: 'Ujumbe'},
        quicklinks: {en: 'Quick Links', sw: 'Viungo Haraka'},
        home: {en: 'Home', sw: 'Makao'},
        academics: {en: 'Academics', sw: 'Taaluma'},
        contact: {en: 'Contacts', sw: 'Anwani'},
        contact_us: {en: 'Contact Us', sw: 'Wasiliana Nasi'},
        about: {en: 'About', sw: 'Kuhusu'},
        news: {en: 'News', sw: 'Habari'},
        terms: {en: 'Terms and conditions', sw: 'Sheria na Masharti'},
        select_course: {en: 'Select Course', sw: 'Chagua Kozi'},
        select_cert: {en: 'Select Certification', sw: 'Chagua Cheti'},
        view_all_courses: {en: 'View All Courses', sw: 'Tazama Kozi Zote'},
        submit_now: {en: 'Submit Now', sw: 'Wasilisha Sasa'},
        search: {en: 'Search', sw: 'Tafuta'},
        staff_login: {en: 'Staff Login', sw: 'Wafanyakazi Kuingia'},
        excited: {en: 'JOIN US!!', sw: 'JIUNGE NASI!!'}
    },
    topics: {
        travel: "Travel",
        business: "Business",
        sports: "Sports",
        politics: "Politics",
        culture: "Culture",
        education: "Education",
        automobiles: "Automobiles"
    },
    links: {
        home: "/",
        homeB: "/home",
        homeC: "/index.html",
        admin: "/webadmin",
        student: "/student",
        error: "*"
    },
    social_media:{
        fb: "https://www.facebook.com/",
        tw: "https://twitter.com/",
        ig: "https://www.instagram.com/",
        git: "https://github.com/MSC-SOFTWARE-ENGINEERING-2022/news-app",
        ld: "https://ke.linkedin.com/",
        yt: "https://www.youtube.com/"
    },
    university: {
        welcome: {
            title: {
                en: "Welcome to our University!",
                sw: "Karibu katika Chuo chetu Kikuu!"
            },
            msg: {
                en: "We are committed to providing our students with a world-class education that prepares them for success in their careers and in their lives. Our dedicated faculty and staff are here to support you every step of the way as you pursue your academic and personal goals. With state-of-the-art facilities and a vibrant community of learners, our university is a place where you can thrive and grow. We invite you to explore all that we have to offer and discover why our university is the perfect place for you to pursue your dreams. Thank you for choosing us as your academic home!",
                sw: "Sisi tumeweka nia yetu kuhakikisha wanafunzi wetu wanapata elimu ya kiwango cha dunia ambayo itawaandaa kwa mafanikio katika kazi zao na maisha yao. Walimu na wafanyakazi wetu waliojitolea wapo hapa kukusaidia kila hatua ya njia unapofuatilia malengo yako ya kielimu na ya kibinafsi. Kwa vituo vya kisasa na jamii imara ya wanafunzi, Chuo chetu Kikuu ni mahali ambapo unaweza kustawi na kukua. Tunakualika kuchunguza yote tunayotoa na kugundua kwa nini Chuo chetu Kikuu ni mahali kamili kwako kufuatilia ndoto zako. Asante kwa kutuchagua kama nyumbani yako ya kielimu!"
            }
        },
        mission: {
            title: {
                en: "Mission",
                sw: "Dhamira"
            },
            msg: {
                en: 'To provide quality education and research that meets the needs of the society',
                sw: 'Kutoa elimu na utafiti wa ubora unaokidhi mahitaji ya jamii'
            }
        },
        vision: {
            title: {
                en: "Vision",
                sw: "Dira"
            },
            msg: {
                en: 'To be a leading center of excellence in higher education and research',
                sw: 'Kuwa kitovu kinachoongoza cha ubora katika elimu ya juu na utafiti'
            }
        },
        values: {
            title: {
                en: "Values",
                sw: "Maadili"
            },
            msg: {
                en: 'Excellence, Integrity, Diversity, Innovation, Community',
                sw: 'Ubora, Uadilifu, Uwiano, Ubunifu, Jamii'
            }
        }
    },
    text:{
        submotto: {en: 'Research, Innovation and Enterprenuership', sw: 'Utafiti, Ubunifu na Ujasiriamali'},
        welcome_title: {en:"Welcome To SCIT", sw:"Karibu kwenye SCIT"},
        welcome_msg: {en:"To provide accessible quality university education, research, training and innovation in order to produce leaders in the field of sustainable urban development to suit the needs of a dynamic world.", sw:"Kutoa elimu bora ya chuo kikuu inayopatikana, utafiti, mafunzo na uvumbuzi ili kutoa viongozi katika uwanja wa maendeleo endelevu ya miji ili kukidhi mahitaji ya ulimwengu unaobadilika."},
        pillars: {
            research: {
                title: {en:"Research", sw:"Utafiti"},
                message: {en:"Research msg", sw:"Utafiti msg"},
            },
            innovation: {
                title: {en:"Innovation", sw:"Ubunifu"},
                message: {en:"Innovation msg", sw:"Ubunifu msg"},
            },
            enterprenuership: {
                title: {en:"Enterprenuership", sw:"Ujasirimali"},
                message: {en:"Enterprenuership msg", sw:"Ujasirimali msg"},
            },
            nationbuilding: {
                title: {en:"Nation Building", sw:"Ujenzi wa Nchi"},
                message: {en:"Nation Building msg", sw:"Ujenzi wa Nchi msg"},
            }
        },
        popular_online: {
            title: {en:"Online Courses", sw:"Kozi za Mtandaoni"},
            message: {en:"Online Courses", sw:"Kozi za Mtandaoni"},
        },
        register_now: {
            title: {en:"Register Now", sw:"Jiandikishe sasa"},
            message: {
                en:"We are thrilled to invite you to register for the upcoming academic year at our esteemed university. Our institution is dedicated to providing an excellent education and empowering our students to achieve their full potential. By joining our university, you will have access to world-class facilities, knowledgeable faculty, and a vibrant student community. We offer a wide range of programs in various fields, including business, engineering, healthcare, and the arts. Don't miss out on this opportunity to pursue your dreams and advance your career. Register now and become part of our university family!", 
                sw:"Tunayo furaha kubwa kuwakaribisha kujiandikisha kwa mwaka wa masomo ujao katika chuo chetu kinachoheshimika. Taasisi yetu imejitolea kutoa elimu bora na kuwawezesha wanafunzi wetu kufikia uwezo wao kamili. Kwa kujiunga na chuo chetu kikuu, utapata upatikanaji wa vituo vya kisasa, walimu wenye ujuzi, na jamii ya wanafunzi wenye hamasa. Tunatoa programu mbalimbali katika nyanja tofauti, ikiwa ni pamoja na biashara, uhandisi, afya, na sanaa.Usikose fursa hii ya kufuata ndoto zako na kuendeleza kazi yako. Jiandikishe sasa na kuwa sehemu ya familia yetu ya chuo kikuu!"
            }
        },
        upcoming_act: {
            title: {en:"Upcoming Activities", sw:"Shughuli Zinazokuja"},
            message: {
                en:"Stay tuned for exciting upcoming activities at our university! From guest speakers to sports events and cultural celebrations, there's always something happening on campus. Don't miss out on the fun - follow us on social media and keep an eye out for announcements!",
                sw:"Shikamana nasi kwa shughuli nyingi za kusisimua zinazokuja katika chuo chetu kikuu! Kutoka kwa wasemaji wageni hadi matukio ya michezo na sherehe za kitamaduni, daima kuna kitu kinachotokea kwenye kambi. Usikose furaha - fuata akaunti zetu za mitandao ya kijamii na uwe macho kwa matangazo!"
            }
        },
        latest_news: {
            title: {en:"Latest News", sw:"Habari Za Hivi Punde"},
            message: {
                en:"Stay up-to-date with the latest news and events at our university! From campus developments to academic achievements and community outreach initiatives, there's always something happening that we're excited to share with you. Check out our website and social media channels to stay informed!",
                sw:"Endelea kuwa na taarifa za karibuni za habari na matukio kwenye chuo chetu kikuu! Kutoka kwa maendeleo ya kambi hadi mafanikio ya kitaaluma na miradi ya kushirikiana na jamii, daima kuna kitu kinachotokea ambacho tunafurahi kushiriki nawe. Angalia tovuti yetu na mitandao yetu ya kijamii ili kuendelea kuwa na taarifa!"
            }
        }
    },
    months:{
        1: {
          en: "January",
          sw: "Januari",
          iso3: "JAN"
        },
        2: {
          en: "February",
          sw: "Februari",
          iso3: "FEB"
        },
        3: {
          en: "March",
          sw: "Machi",
          iso3: "MAR"
        },
        4: {
          en: "April",
          sw: "Aprili",
          iso3: "APR"
        },
        5: {
          en: "May",
          sw: "Mei",
          iso3: "MAY"
        },
        6: {
          en: "June",
          sw: "Juni",
          iso3: "JUN"
        },
        7: {
          en: "July",
          sw: "Julai",
          iso3: "JUL"
        },
        8: {
          en: "August",
          sw: "Agosti",
          iso3: "AUG"
        },
        9: {
          en: "September",
          sw: "Septemba",
          iso3: "SEP"
        },
        10: {
          en: "October",
          sw: "Oktoba",
          iso3: "OCT"
        },
        11: {
          en: "November",
          sw: "Novemba",
          iso3: "NOV"
        },
        12: {
          en: "December",
          sw: "Desemba",
          iso3: "DEC"
        }
    }
}

export default configs;