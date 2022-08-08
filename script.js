var url = document.URL.split('/').pop();
var quizInit = true;
var Questions = [];
var sourcePath = '';
var preSource = '';
var ending = 'jpg';
var correct = 'limegreen';
var incorrect = 'red';

switch (url) {
    case 'Houses.html':
        Questions = [
            {
                a: "Lesotho",
                img: ["lesotho_1", "lesotho_2"]
            },
            {
                a: "Tunisia",
                img: ["tunisia_1", "tunisia_2", "tunisia_3"]
            },
            {
                a: "Bhutan",
                img: ["bhutan_1"]
            },
            {
                a: "Cambodia",
                img: ["cambodia_1"]
            },
            {
                a: "Japan",
                img: ["japan_1"]
            },
            {
                a: "Kyrgyzstan",
                img: ["kyrgyzstan_1"]
            },
            {
                a: "Malaysia",
                img: ["malaysia_1"]
            },
            {
                a: "Mongolia",
                img: ["mongolia_1"]
            },
            {
                a: "Singapore",
                img: ["singapore_1"]
            },
            {
                a: "South Korea",
                img: ["south_korea_1", "south_korea_2"]
            },
            {
                a: "Taiwan",
                img: ["taiwan_1"]
            },
            {
                a: "Vietnam",
                img: ["vietnam_1"]
            },
            {
                a: "Andorra",
                img: ["andorra_1", "andorra_2"]
            },
            {
                a: "Austria",
                img: ["austria_1", "austria_2", "austria_3"]
            },
            {
                a: "Belgium",
                img: ["belgium_1"]
            },
            {
                a: "Bulgaria",
                img: ["bulgaria_1"]
            },
            {
                a: "Denmark",
                img: ["denmark_1"]
            },
            {
                a: "Faroe Islands",
                img: ["faroe_islands_1", "faroe_islands_2"]
            },
            {
                a: "Finland",
                img: ["finland_1", "finland_2"]
            },
            {
                a: "France",
                img: ["france_1", "france_2"]
            },
            {
                a: "Hungary",
                img: ["hungary_1"]
            },
            {
                a: "Malta",
                img: ["malta_1"]
            },
            {
                a: "Monaco",
                img: ["monaco_1"]
            },
            {
                a: "Netherlands",
                img: ["netherlands_1", "netherlands_2", "netherlands_3"]
            },
            {
                a: "Slovakia",
                img: ["slovakia_1"]
            },
            {
                a: "Slovenia",
                img: ["slovenia_1", "slovenia_2", "slovenia_3", "slovenia_4"]
            },
            {
                a: "Sweden",
                img: ["sweden_1"]
            },
            {
                a: "Switzerland",
                img: ["switzerland_1"]
            },
            {
                a: "United Kingdom",
                img: ["UK_1", "UK_2", "UK_3"]
            },
            {
                a: "Canada",
                img: ["canada_1", "canada_2"]
            },
            {
                a: "Greenland",
                img: ["greenland_1"]
            },
            {
                a: "United States",
                img: ["US_1", "US_2", "US_3"]
            },
            {
                a: "American Samoa",
                img: ["american_samoa_1", "american_samoa_2"]
            },
            {
                a: "Bolivia",
                img: ["bolivia_1"]
            }
        ];
        sourcePath = 'Houses';
        break;
    case 'Bollards.html':
        Questions = [{'a': 'Botswana', 'img': ['2', '1', '3']},
        {'a': 'Ghana', 'img': ['7', '4', '5', '6']},
        {'a': 'Kenya', 'img': ['8', '320']},
        {'a': 'Senegal', 'img': ['13', '15', '16', '14']},
        {'a': 'Bangladesh', 'img': ['19', '20', '321']},
        {'a': 'Cambodia', 'img': ['27', '28', '31', '361', '30', '32', '82', '322', '29', '26', '33']},
        {'a': 'Japan', 'img': ['47', '50', '49', '51', '48', '96']},
        {'a': 'Malaysia', 'img': ['59', '283', '60', '328', '62', '58', '61']},
        {'a': 'Mongolia', 'img': ['63', '64']},
        {'a': 'France', 'img': ['121', '125', '302', '120', '122', '124']},
        {'a': 'Monaco', 'img': ['142']},
        {'a': 'Netherlands', 'img': ['147', '295', '331', '146', '148']},
        {'a': 'North Macedonia', 'img': ['151', '149', '150', '152']},
        {'a': 'Poland', 'img': ['154']},
        {'a': 'Romania', 'img': ['160', '175', '159', '161', '344']},
        {'a': 'Turkey', 'img': ['176', '362', '177']},
        {'a': 'Canada', 'img': ['183', '186', '188', '193', '189', '190', '191', '194', '365', '192', '185', '251']},
        {'a': 'Australia', 'img': ['214', '215', '217', '373', '356', '330', '293', '355']},
        {'a': 'New Zealand', 'img': ['218', '301']},
        {'a': 'Ecuador', 'img': ['221', '222', '223', '224', '225', '227', '329', '226', '246']},
        {'a': 'Christmas Island', 'img': ['233', '234']},
        {'a': 'Northern Ireland (UK)', 'img': ['236']},
        {'a': 'England (UK)', 'img': ['256']},
        {'a': 'South Africa', 'img': ['237', '334', '274']},
        {'a': 'Albania', 'img': ['245', '97', '98', '323']},
        {'a': 'Croatia', 'img': ['265', '112']},
        {'a': 'United Kingdom', 'img': ['267', '181', '358']},
        {'a': 'Kyrgyzstan', 'img': ['253', '53', '55', '56', '57']},
        {'a': 'Spain', 'img': ['294', '342', '170', '260', '169', '308', '347']},
        {'a': 'Tunisia', 'img': ['306', '17', '310', '311']},
        {'a': 'Ukraine', 'img': ['335', '336', '367', '178', '179', '180']},
        {'a': 'Portugal', 'img': ['338', '157', '155', '158', '156', '339']},
        {'a': 'Bolivia', 'img': ['345']},
        {'a': 'Uganda', 'img': ['363', '35', '36', '37']},
        {'a': 'Jordan', 'img': ['52']},
        {'a': 'South Korea', 'img': ['77', '79', '80', '84', '78']},
        {'a': 'Belgium', 'img': ['105', '106', '108', '325', '107']},
        {'a': 'Denmark', 'img': ['115']},
        {'a': 'Iceland', 'img': ['129']},
        {'a': 'United States', 'img': ['200', '203', '209', '286', '206', '261', '290', '281', '201', '202', '204', '205', '207', '211', '248', '199', '208', '210', '212', '277']},
        {'a': 'Peru', 'img': ['229', '230', '318', '228', '319', '249']},
        {'a': 'Uruguay', 'img': ['231', '232']},
        {'a': 'Faroe Islands', 'img': ['118']},
        {'a': 'Indonesia', 'img': ['39', '41', '45', '34', '40', '38', '42', '254', '252', '346', '349', '360', '370']},
        {'a': 'Russia', 'img': ['72', '73', '75', '87', '74']},
        {'a': 'Austria', 'img': ['103', '104', '262', '284', '382', '385', '276', '387']},
        {'a': 'Bulgaria', 'img': ['109', '377', '379', '110', '378', '111']},
        {'a': 'Czech Republic', 'img': ['113', '114', '242']},
        {'a': 'Greece', 'img': ['127']},
        {'a': 'Hungary', 'img': ['128']},
        {'a': 'Isle of Man', 'img': ['133']},
        {'a': 'Italy', 'img': ['134', '135', '369']},
        {'a': 'Jersey', 'img': ['136']},
        {'a': 'Lithuania', 'img': ['139', '269']},
        {'a': 'Luxembourg', 'img': ['140', '141', '258', '287']},
        {'a': 'Montenegro', 'img': ['143', '144', '145']},
        {'a': 'San Marino', 'img': ['162']},
        {'a': 'Serbia', 'img': ['163', '164', '165']},
        {'a': 'Slovakia', 'img': ['166', '167', '266']},
        {'a': 'Slovenia', 'img': ['168', '313', '389']},
        {'a': 'Sweden', 'img': ['280', '171', '187', '299', '298', '359']},
        {'a': 'Andorra', 'img': ['282']},
        {'a': 'Argentina', 'img': ['317', '305']},
        {'a': 'Bhutan', 'img': ['333', '21', '24']},
        {'a': 'Israel', 'img': ['43', '46', '44']},
        {'a': 'Laos', 'img': ['67', '68', '69']},
        {'a': 'Thailand', 'img': ['91', '93', '94', '95', '92']},
        {'a': 'Estonia', 'img': ['116', '117', '304']},
        {'a': 'Finland', 'img': ['119']},
        {'a': 'Germany', 'img': ['126']},
        {'a': 'Latvia', 'img': ['138', '137']},
        {'a': 'Norway', 'img': ['153']},
        {'a': 'Switzerland', 'img': ['172', '173', '174']},
        {'a': 'Mexico', 'img': ['196', '197', '371', '198', '244']},
        {'a': 'Brazil', 'img': ['264', '368']},
        {'a': 'Philippines', 'img': ['70', '65', '66', '71']},
        {'a': 'Taiwan', 'img': ['88', '89', '90']},
        {'a': 'Chile', 'img': ['219']},
        {'a': 'Åland (Finland)', 'img': ['235']},
        {'a': 'Colombia', 'img': ['291', '220']},
        {'a': 'RÃ©union (France)', 'img': ['348', '350']},
        {'a': 'Lesotho', 'img': ['9', '10', '11', '238', '239']},
        {'a': 'Nigeria', 'img': ['12']},
        {'a': 'Sri Lanka', 'img': ['85', '86']},
        {'a': 'Eswatini', 'img': ['240']},
        {'a': 'Madagascar', 'img': ['312']}
        ];
        sourcePath = 'Bollards'
        preSource = 'bollard_'
        break;
    case 'Cars.html':
        Questions = [
            {'a': 'Botswana', 'img': ['1', '2']},
            {'a': 'Eswatini', 'img': ['3']},
            {'a': 'France (Réunion)', 'img': ['285']},
            {'a': 'Ghana', 'img': ['4', '5', '243']},
            {'a': 'Kenya', 'img': ['6', '7', '268', '275', '312', '313', '314', '367']},
            {'a': 'Lesotho', 'img': ['8']},
            {'a': 'Madagascar', 'img': ['222', '223', '238']},
            {'a': 'Nigeria', 'img': ['9', '10', '11']},
            {'a': 'Senegal', 'img': ['12', '13']},
            {'a': 'South Africa', 'img': ['14', '15', '255']},
            {'a': 'Tunisia', 'img': ['16']},
            {'a': 'Uganda', 'img': ['17', '18', '19', '20']},
            {'a': 'Bangladesh', 'img': ['108', '109', '110', '231', '305', '333']},
            {'a': 'Bhutan', 'img': ['21', '22']},
            {'a': 'Cambodia', 'img': ['23', '24', '25', '277']},
            {'a': 'Christmas Island', 'img': ['196']},
            {'a': 'Indonesia', 'img': ['26', '27', '28', '29', '30', '31', '281', '401', '408', '414']},
            {'a': 'Israel', 'img': ['32', '33', '34']},
            {'a': 'Japan', 'img': ['35', '36', '37', '38', '266', '280', '319', '426', '427', '428']},
            {'a': 'Jordan', 'img': ['39', '40']},
            {'a': 'Kyrgyzstan', 'img': ['41']},
            {'a': 'Laos', 'img': ['42', '43']},
            {'a': 'Malaysia', 'img': ['44', '45', '46', '123', '253', '293', '385']},
            {'a': 'Mongolia', 'img': ['47', '48', '49', '50', '51', '52', '53', '54', '59', '60']},
            {'a': 'Pakistan', 'img': ['252', '303']},
            {'a': 'Philippines', 'img': ['55', '56', '57', '58', '244', '272', '273', '304']},
            {'a': 'Russia', 'img': ['61', '62', '63']},
            {'a': 'Singapore', 'img': ['64']},
            {'a': 'South Korea', 'img': ['65', '66', '262']},
            {'a': 'Sri Lanka', 'img': ['67', '284']},
            {'a': 'Taiwan', 'img': ['68', '69', '70']},
            {'a': 'Thailand', 'img': ['71', '72', '73', '330', '381', '443']},
            {'a': 'United Arab Emirates', 'img': ['227', '228', '229', '248']},
            {'a': 'Vietnam', 'img': ['74', '75', '76', '77', '78', '79', '80', '132', '251', '370']},
            {'a': 'Albania', 'img': ['81']},
            {'a': 'Andorra', 'img': ['82', '237']},
            {'a': 'Austria', 'img': ['111', '267']},
            {'a': 'Belgium', 'img': ['112', '113', '321']},
            {'a': 'Bulgaria', 'img': ['83', '84', '85', '334']},
            {'a': 'Croatia', 'img': ['86', '87']},
            {'a': 'Czech Republic', 'img': ['88', '89', '90', '91', '92', '93']},
            {'a': 'Denmark', 'img': ['94', '95']},
            {'a': 'Estonia', 'img': ['96', '97']},
            {'a': 'Faroe Islands', 'img': ['98', '301']},
            {'a': 'Finland', 'img': ['99', '271']},
            {'a': 'France', 'img': ['100', '101', '102', '282', '369', '380', '234', '324']},
            {'a': 'Hungary', 'img': ['103', '104', '105', '106', '335']},
            {'a': 'Gibraltar', 'img': ['221']},
            {'a': 'Greece', 'img': ['114', '115', '116']},
            {'a': 'Iceland', 'img': ['107']},
            {'a': 'Ireland', 'img': ['117', '296', '331', '365']},
            {'a': 'Italy', 'img': ['118', '119', '291', '405', '416']},
            {'a': 'Latvia', 'img': ['120', '417', '418', '429', '430']},
            {'a': 'Lithuania', 'img': ['121', '276']},
            {'a': 'Malta', 'img': ['122']},
            {'a': 'Montenegro', 'img': ['124']},
            {'a': 'Netherlands', 'img': ['125', '126']},
            {'a': 'North Macedonia', 'img': ['127']},
            {'a': 'Norway', 'img': ['128']},
            {'a': 'Norway (Svalbard)', 'img': ['258', '368']},
            {'a': 'Poland', 'img': ['129', '130', '131', '133', '263', '288']},
            {'a': 'Portugal', 'img': ['134', '135']},
            {'a': 'Romania', 'img': ['137', '138', '336', '424']},
            {'a': 'Serbia', 'img': ['139', '140']},
            {'a': 'Slovakia', 'img': ['141', '142', '379']},
            {'a': 'Slovenia', 'img': ['143', '144']},
            {'a': 'Spain', 'img': ['145', '146', '257', '327', '337']},
            {'a': 'Sweden', 'img': ['147', '148', '338']},
            {'a': 'Switzerland', 'img': ['149', '246', '356']},
            {'a': 'Turkey', 'img': ['150', '151', '152']},
            {'a': 'Ukraine', 'img': ['153', '154', '155', '247', '353']},
            {'a': 'United Kingdom', 'img': ['156', '157', '329', '366']},
            {'a': 'Bermuda', 'img': ['270']},
            {'a': 'Canada', 'img': ['158', '159', '160', '161', '230', '232', '241', '259', '279', '283', '294', '298', '316', '317', '318', '322', '323', '325', '382', '384', '402', '409', '419', '420', '437']},
            {'a': 'Costa Rica', 'img': ['245']},
            {'a': 'Curaçao', 'img': ['162']},
            {'a': 'Dominican Republic', 'img': ['163']},
            {'a': 'Greenland', 'img': ['164', '165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175', '176', '177', '178', '179', '180', '181', '182', '183', '286', '287']},
            {'a': 'Guatemala', 'img': ['184']},
            {'a': 'Mexico', 'img': ['185', '186', '187', '295', '300', '310', '306', '410', '412', '439', '440']},
            {'a': 'Puerto Rico', 'img': ['188']},
            {'a': 'United States', 'img': ['189', '190', '202', '233', '242', '249', '256', '297', '308', '311', '411', '413', '415', '435', '436', '438']},
            {'a': 'US Virgin Islands', 'img': ['218', '219', '220', '421']},
            {'a': 'American Samoa', 'img': ['224', '225', '226']},
            {'a': 'Australia', 'img': ['191', '192', '193', '194', '195', '197', '198', '239', '261', '269', '278', '290', '302', '339', '340', '341', '342', '346', '347', '348', '349', '350', '351', '352', '371', '372', '373', '374', '375', '376', '377', '388', '389', '390', '391', '392', '393', '394', '395', '397', '398', '399', '400', '406', '431', '432', '433', '434']},
            {'a': 'Guam', 'img': ['136']},
            {'a': 'New Zealand', 'img': ['199', '200', '292', '343', '344', '345', '378', '387', '396', '403', '404', '442']},
            {'a': 'Northern Mariana Islands', 'img': ['201']},
            {'a': 'Argentina', 'img': ['203', '204', '254', '326', '328', '332', '354', '355', '425', '441']},
            {'a': 'Bolivia', 'img': ['205', '309']},
            {'a': 'Brazil', 'img': ['206', '207', '208', '240', '274', '383', '407']},
            {'a': 'Chile', 'img': ['209', '235', '264', '357', '358', '359', '360', '361', '362', '422', '423']},
            {'a': 'Colombia', 'img': ['210', '211', '212', '250', '260', '265', '307', '320', '363', '364', '386']},
            {'a': 'Ecuador', 'img': ['213']},
            {'a': 'Peru', 'img': ['214', '215', '216', '289', '299']},
            {'a': 'Uruguay', 'img': ['217', '236', '315']}
        ];
        sourcePath = 'Cars'
        preSource = 'car_'
        break;
    case 'Flags.html':
        Questions = [{'a': 'Botswana', 'img': ['botswana']},
        {'a': 'Eswatini', 'img': ['eswatini']},
        {'a': 'Ghana', 'img': ['ghana']},
        {'a': 'Kenya', 'img': ['kenya']},
        {'a': 'Lesotho', 'img': ['lesotho']},
        {'a': 'Madagascar', 'img': ['madagascar']},
        {'a': 'Nigeria', 'img': ['nigeria']},
        {'a': 'Senegal', 'img': ['senegal']},
        {'a': 'South Africa', 'img': ['south_africa']},
        {'a': 'Tunisia', 'img': ['tunisia']},
        {'a': 'Uganda', 'img': ['uganda']},
        {'a': 'Bangladesh', 'img': ['bangladesh']},
        {'a': 'Bhutan', 'img': ['bhutan']},
        {'a': 'Cambodia', 'img': ['cambodia']},
        {'a': 'Christmas Island', 'img': ['christmas_island']},
        {'a': 'India', 'img': ['india']},
        {'a': 'Indonesia', 'img': ['indonesia']},
        {'a': 'Israel', 'img': ['israel']},
        {'a': 'Japan', 'img': ['japan']},
        {'a': 'Jordan', 'img': ['jordan']},
        {'a': 'Kyrgyzstan', 'img': ['kyrgyzstan']},
        {'a': 'Laos', 'img': ['laos']},
        {'a': 'Malaysia', 'img': ['malaysia']},
        {'a': 'Mongolia', 'img': ['mongolia']},
        {'a': 'Philippines', 'img': ['philippines']},
        {'a': 'Russia', 'img': ['russia']},
        {'a': 'Singapore', 'img': ['singapore']},
        {'a': 'South Korea', 'img': ['south_korea']},
        {'a': 'Sri Lanka', 'img': ['sri_lanka']},
        {'a': 'Taiwan', 'img': ['taiwan']},
        {'a': 'Thailand', 'img': ['thailand']},
        {'a': 'United Arab Emirates', 'img': ['united_arab_emirates']},
        {'a': 'Vietnam', 'img': ['vietnam']},
        {'a': 'Albania', 'img': ['albania']},
        {'a': 'Andorra', 'img': ['andorra']},
        {'a': 'Austria', 'img': ['austria']},
        {'a': 'Belgium', 'img': ['belgium']},
        {'a': 'Bulgaria', 'img': ['bulgaria']},
        {'a': 'Croatia', 'img': ['croatia']},
        {'a': 'Czech Republic', 'img': ['czech_republic']},
        {'a': 'Denmark', 'img': ['denmark']},
        {'a': 'Estonia', 'img': ['estonia']},
        {'a': 'Faroe Islands', 'img': ['faroe_islands']},
        {'a': 'Finland', 'img': ['finland']},
        {'a': 'France', 'img': ['france']},
        {'a': 'Germany', 'img': ['germany']},
        {'a': 'Gibraltar', 'img': ['gibraltar']},
        {'a': 'Greece', 'img': ['greece']},
        {'a': 'Hungary', 'img': ['hungary']},
        {'a': 'Iceland', 'img': ['iceland']},
        {'a': 'Ireland', 'img': ['ireland']},
        {'a': 'Isle of Man', 'img': ['isle_of_man']},
        {'a': 'Italy', 'img': ['italy']},
        {'a': 'Jersey', 'img': ['jersey']},
        {'a': 'Latvia', 'img': ['latvia']},
        {'a': 'Lithuania', 'img': ['lithuania']},
        {'a': 'Luxembourg', 'img': ['luxembourg']},
        {'a': 'Malta', 'img': ['malta']},
        {'a': 'Monaco', 'img': ['monaco']},
        {'a': 'Montenegro', 'img': ['montenegro']},
        {'a': 'Netherlands', 'img': ['netherlands']},
        {'a': 'North Macedonia', 'img': ['north_macedonia']},
        {'a': 'Norway', 'img': ['norway']},
        {'a': 'Poland', 'img': ['poland']},
        {'a': 'Portugal', 'img': ['portugal']},
        {'a': 'Romania', 'img': ['romania']},
        {'a': 'San Marino', 'img': ['san_marino']},
        {'a': 'Serbia', 'img': ['serbia']},
        {'a': 'Slovakia', 'img': ['slovakia']},
        {'a': 'Slovenia', 'img': ['slovenia']},
        {'a': 'Spain', 'img': ['spain']},
        {'a': 'Sweden', 'img': ['sweden']},
        {'a': 'Switzerland', 'img': ['switzerland']},
        {'a': 'Turkey', 'img': ['turkey']},
        {'a': 'Ukraine', 'img': ['ukraine']},
        {'a': 'United Kingdom', 'img': ['uk']},
        {'a': 'Canada', 'img': ['canada']},
        {'a': 'Curaçao', 'img': ['curacao']},
        {'a': 'Dominican Republic', 'img': ['dominican_republic']},
        {'a': 'Greenland', 'img': ['greenland']},
        {'a': 'Guatemala', 'img': ['guatemala']},
        {'a': 'Mexico', 'img': ['mexico']},
        {'a': 'Puerto Rico', 'img': ['puerto_rico']},
        {'a': 'United States of America', 'img': ['usa']},
        {'a': 'US Virgin Islands', 'img': ['us_vi']},
        {'a': 'American Samoa', 'img': ['american_samoa']},
        {'a': 'Australia', 'img': ['australia']},
        {'a': 'Guam', 'img': ['guam']},
        {'a': 'New Zealand', 'img': ['nz']},
        {'a': 'Northern Mariana Islands', 'img': ['northern_mariana_islands']},
        {'a': 'Argentina', 'img': ['argentina']},
        {'a': 'Bolivia', 'img': ['bolivia']},
        {'a': 'Brazil', 'img': ['brazil']},
        {'a': 'Chile', 'img': ['chile']},
        {'a': 'Colombia', 'img': ['colombia']},
        {'a': 'Ecuador', 'img': ['ecuador']},
        {'a': 'Peru', 'img': ['peru']},
        {'a': 'Uruguay', 'img': ['uruguay']}
        ];
        sourcePath = 'Flags';
        preSource = 'flag_';
        ending = 'svg';
        break;
    case 'Follow.html':
        Questions = [{'a': 'Kenya', 'img': ['1', '2', '25']},
        {'a': 'Nigeria', 'img': ['3', '4', '5', '6', '7', '8', '22']},
        {'a': 'Tunisia', 'img': ['9', '10', '11', '17', '18', '19', '20', '21']},
        {'a': 'Palestine (Israel)', 'img': ['12', '13', '14']},
        {'a': 'Israel', 'img': ['15', '16']},
        {'a': 'Philippines', 'img': ['23']},
        {'a': 'Australia (Cocos (Keeling) Islands)', 'img': ['24']}
        ];
        sourcePath = 'Follow';
        preSource = 'followcar_';
        break;
    case 'HouseNumbers.html':
        Questions = [{'a': 'Israel', 'img': ['israel']},
        {'a': 'Russia', 'img': ['russia_2', 'russia_1']},
        {'a': 'South Korea', 'img': ['south_korea_1', 'south_korea_2']},
        {'a': 'Taiwan', 'img': ['taiwan_1', 'taiwan_2', 'taiwan_3', 'taiwan_4']},
        {'a': 'Austria', 'img': ['austria']},
        {'a': 'Croatia', 'img': ['croatia']},
        {'a': 'Czech Republic', 'img': ['czech_republic_1', 'czech_republic_2']},
        {'a': 'France', 'img': ['france']},
        {'a': 'Greece', 'img': ['greece']},
        {'a': 'Latvia', 'img': ['latvia']},
        {'a': 'Netherlands', 'img': ['netherlands']},
        {'a': 'Slovakia', 'img': ['slovakia']},
        {'a': 'Slovenia', 'img': ['slovenia']}];
        sourcePath = 'HouseNumbers';
        break;
    case 'LicensePlates.html':
        Questions = [{'a': 'Botswana', 'img': ['Botswana_front', 'Botswana_back']},
        {'a': 'Eswatini', 'img': ['Eswatini']},
        {'a': 'Ghana', 'img': ['Ghana']},
        {'a': 'Kenya', 'img': ['Kenya_front', 'Kenya_back']},
        {'a': 'Lesotho', 'img': ['Lesotho']},
        {'a': 'Madagascar', 'img': ['Madagascar']},
        {'a': 'Nigeria', 'img': ['Nigeria']},
        {'a': 'Senegal', 'img': ['Senegal']},
        {'a': 'South Africa', 'img': ['South_Africa_Eastern_Cape', 'South_Africa_Free_State', 'South_Africa_Gauteng', 'South_Africa_KwaZulu-Natal', 'South_Africa_Limpopo', 'South_Africa_Mpumalanga', 'South_Africa_North_West', 'South_Africa_Northern_Cape', 'South_Africa_Western_Cape']},
        {'a': 'Tunisia', 'img': ['Tunisia']},
        {'a': 'Uganda', 'img': ['Uganda_front', 'Uganda_back']},
        {'a': 'Bangladesh', 'img': ['Bangladesh']},
        {'a': 'Bhutan', 'img': ['Bhutan']},
        {'a': 'Cambodia', 'img': ['Cambodia']},
        {'a': 'Christmas Island', 'img': ['Christmas_Island']},
        {'a': 'India', 'img': ['India', 'India_2']},
        {'a': 'Indonesia', 'img': ['Indonesia']},
        {'a': 'Israel', 'img': ['Israel']},
        {'a': 'Japan', 'img': ['Japan_white', 'Japan_yellow']},
        {'a': 'Jordan', 'img': ['Jordan']},
        {'a': 'Kyrgyzstan', 'img': ['Kyrgyzstan_new', 'Kyrgyzstan_old']},
        {'a': 'Laos', 'img': ['Laos']},
        {'a': 'Malaysia', 'img': ['Malaysia']},
        {'a': 'Mongolia', 'img': ['Mongolia']},
        {'a': 'Philippines', 'img': ['Philippines_new', 'Philippines_old']},
        {'a': 'Russia', 'img': ['Russia']},
        {'a': 'Singapore', 'img': ['Singapore_front', 'Singapore_back']},
        {'a': 'South Korea', 'img': ['South_Korea']},
        {'a': 'Sri Lanka', 'img': ['Sri_Lanka_front', 'Sri_Lanka_back']},
        {'a': 'Taiwan', 'img': ['Taiwan']},
        {'a': 'Thailand', 'img': ['Thailand']},
        {'a': 'United Arab Emirates', 'img': ['UAE_Abu_Dhabi', 'UAE_Ajman', 'UAE_Dubai', 'UAE_Fujairah', 'UAE_Ras_Al_Khaimah', 'UAE_Sharjah', 'UAE_Umm_Al_Quwain']},
        {'a': 'Vietnam', 'img': ['Vietnam']},
        {'a': 'Albania', 'img': ['Albania_new', 'Albania_old']},
        {'a': 'Andorra', 'img': ['Andorra']},
        {'a': 'Austria', 'img': ['Austria']},
        {'a': 'Belgium', 'img': ['Belgium_new', 'Belgium_old']},
        {'a': 'Bulgaria', 'img': ['Bulgaria_new', 'Bulgaria_old']},
        {'a': 'Croatia', 'img': ['Croatia_new', 'Croatia_old']},
        {'a': 'Czech Republic', 'img': ['Czech_Republic']},
        {'a': 'Denmark', 'img': ['Denmark_private', 'Denmark_commercial', 'Denmark_parrot']},
        {'a': 'Estonia', 'img': ['Estonia']},
        {'a': 'Faroe Islands', 'img': ['Faroe_Islands']},
        {'a': 'Finland', 'img': ['Finland']},
        {'a': 'France', 'img': ['France_new', 'France_old_front', 'France_old_back']},
        {'a': 'Germany', 'img': ['Germany']},
        {'a': 'Gibraltar', 'img': ['Gibraltar_front', 'Gibraltar_back']},
        {'a': 'Greece', 'img': ['Greece']},
        {'a': 'Hungary', 'img': ['Hungary']},
        {'a': 'Iceland', 'img': ['Iceland']},
        {'a': 'Ireland', 'img': ['Ireland']},
        {'a': 'Isle of Man', 'img': ['Isle_of_Man_front', 'Isle_of_Man_back']},
        {'a': 'Italy', 'img': ['Italy_new', 'Italy_old']},
        {'a': 'Jersey', 'img': ['Jersey_front', 'Jersey_back']},
        {'a': 'Latvia', 'img': ['Latvia']},
        {'a': 'Lithuania', 'img': ['Lithuania']},
        {'a': 'Luxembourg', 'img': ['Luxembourg']},
        {'a': 'Malta', 'img': ['Malta']},
        {'a': 'Monaco', 'img': ['Monaco_front', 'Monaco_back']},
        {'a': 'Montenegro', 'img': ['Montenegro_new', 'Montenegro_old']},
        {'a': 'Netherlands', 'img': ['Netherlands']},
        {'a': 'North Macedonia', 'img': ['North_Macedonia_new', 'North_Macedonia_old']},
        {'a': 'Norway', 'img': ['Norway_private', 'Norway_commercial']},
        {'a': 'Poland', 'img': ['Poland']},
        {'a': 'Portugal', 'img': ['Portugal_new', 'Portugal_old']},
        {'a': 'Romania', 'img': ['Romania']},
        {'a': 'San Marino', 'img': ['San_Marino']},
        {'a': 'Serbia', 'img': ['Serbia_new', 'Serbia_old']},
        {'a': 'Slovakia', 'img': ['Slovakia']},
        {'a': 'Slovenia', 'img': ['Slovenia_new', 'Slovenia_old', 'Slovenia_old_2']},
        {'a': 'Spain', 'img': ['Spain']},
        {'a': 'Sweden', 'img': ['Sweden_new', 'Sweden_old']},
        {'a': 'Switzerland', 'img': ['Switzerland']},
        {'a': 'Turkey', 'img': ['Turkey']},
        {'a': 'Ukraine', 'img': ['Ukraine_new', 'Ukraine_old']},
        {'a': 'United Kingdom', 'img': ['UK_blank_front', 'UK_blank_back', 'UK_GB_front', 'UK_GB_back', 'UK_ENG_front', 'UK_ENG_back', 'UK_SCO_front', 'UK_SCO_back', 'UK_CYM_front', 'UK_CYM_back', 'UK_EU_front', 'UK_EU_back']},
        {'a': 'Canada', 'img': ['Canada_Alberta', 'Canada_BC', 'Canada_Manitoba', 'Canada_NB', 'Canada_NL', 'Canada_NT', 'Canada_NS', 'Canada_Nunavut', 'Canada_Ontario', 'Canada_PEI', 'Canada_Quebec', 'Canada_Saskatchewan', 'Canada_Yukon']},
        {'a': 'Curaçao', 'img': ['Curacao']},
        {'a': 'Dominican Republic', 'img': ['Dominican_Republic']},
        {'a': 'Greenland', 'img': ['Greenland']},
        {'a': 'Guatemala', 'img': ['Guatemala_new', 'Guatemala_old']},
        {'a': 'Puerto Rico', 'img': ['Puerto_Rico_new', 'Puerto_Rico_old', 'Puerto_Rico_old2']},
        {'a': 'US Virgin Islands', 'img': ['US_VI_new', 'US_VI_old']},
        {'a': 'American Samoa', 'img': ['American_Samoa_new', 'American_Samoa_old']},
        {'a': 'Australia', 'img': ['Australia_ACT', 'Australia_NSW', 'Australia_NT', 'Australia_Queensland', 'Australia_SA', 'Australia_Tasmania', 'Australia_Victoria', 'Australia_WA']},
        {'a': 'Guam', 'img': ['Guam_new', 'Guam_old']},
        {'a': 'New Zealand', 'img': ['New_Zealand']},
        {'a': 'Northern Mariana Islands', 'img': ['Northern_Mariana_Islands']},
        {'a': 'Argentina', 'img': ['Argentina_new', 'Argentina_old']},
        {'a': 'Bolivia', 'img': ['Bolivia']},
        {'a': 'Brazil', 'img': ['Brazil_new', 'Brazil_old']},
        {'a': 'Chile', 'img': ['Chile']},
        {'a': 'Colombia', 'img': ['Colombia']},
        {'a': 'Ecuador', 'img': ['Ecuador']},
        {'a': 'Peru', 'img': ['Peru']},
        {'a': 'Uruguay', 'img': ['Uruguay_new', 'Uruguay_old']}
        ];
        sourcePath = 'LicencePlates';
        break;
    case 'Trees.html':
        Questions = [{'a': 'Madagascar', 'img': ['1']},
        {'a': 'Japan', 'img': ['16', '33']},
        {'a': 'Malaysia', 'img': ['23', '26', '41']},
        {'a': 'Russia', 'img': ['46']},
        {'a': 'Portugal', 'img': ['17']},
        {'a': 'Canada', 'img': ['14', '34']},
        {'a': 'Guatemala', 'img': ['37']},
        {'a': 'Mexico', 'img': ['3', '32', '38']},
        {'a': 'United Kingdom (Bermuda)', 'img': ['40']},
        {'a': 'United States', 'img': ['9', '18', '35', '42', '43']},
        {'a': 'Australia', 'img': ['24', '47']},
        {'a': 'New Zealand', 'img': ['2']},
        {'a': 'Argentina', 'img': ['4', '20', '39']},
        {'a': 'Bolivia', 'img': ['21']},
        {'a': 'Brazil', 'img': ['5', '10', '36']},
        {'a': 'Chile', 'img': ['6', '19', '25', '30', '44']},
        {'a': 'Colombia', 'img': ['11', '13', '45']},
        {'a': 'Ecuador', 'img': ['7', '12', '29']},
        {'a': 'Ecuador (GalÃ¡pagos Islands)', 'img': ['27', '31']},
        {'a': 'Peru', 'img': ['8', '15', '22', '28']}
        ];
        sourcePath = 'Trees';
        preSource = 'tree_';
        break;
    case 'Rifts.html':
        Questions = [{'a': 'Botswana', 'img': ['1', '44']},
        {'a': 'Bangladesh', 'img': ['2']},
        {'a': 'Nigeria', 'img': ['3']},
        {'a': 'Mexico', 'img': ['4']},
        {'a': 'United Arab Emirates', 'img': ['5']},
        {'a': 'Montenegro', 'img': ['6']},
        {'a': 'Albania', 'img': ['7']},
        {'a': 'Senegal', 'img': ['8', '31']},
        {'a': 'Brazil', 'img': ['9', '35']},
        {'a': 'Argentina', 'img': ['10']},
        {'a': 'Spain', 'img': ['11']},
        {'a': 'Australia', 'img': ['12', '42']},
        {'a': 'Philippines', 'img': ['13', '32']},
        {'a': 'Madagascar', 'img': ['14', '15']},
        {'a': 'Chile', 'img': ['16']},
        {'a': 'Malaysia', 'img': ['17', '21', '40']},
        {'a': 'Slovakia', 'img': ['18']},
        {'a': 'United States', 'img': ['19', '20', '37', '45']},
        {'a': 'Israel', 'img': ['22', '23']},
        {'a': 'Italy', 'img': ['24']},
        {'a': 'Netherlands', 'img': ['25', '26']},
        {'a': 'Uruguay', 'img': ['27']},
        {'a': 'Greenland', 'img': ['28']},
        {'a': 'Taiwan', 'img': ['29']},
        {'a': 'France', 'img': ['30', '36']},
        {'a': 'Kyrgyzstan', 'img': ['33']},
        {'a': 'Eswatini', 'img': ['34']},
        {'a': 'Belgium', 'img': ['38']},
        {'a': 'Indonesia', 'img': ['39']},
        {'a': 'Dominican Republic', 'img': ['41']},
        {'a': 'North Macedonia', 'img': ['43']}
        ];
        sourcePath = 'Rifts';
        preSource = 'rift_';
        break;
    case 'Scenery.html':
        Questions = [{'a': 'Botswana', 'img': ['botswana_1', 'botswana_2', 'botswana_3']},
        {'a': 'Eswatini', 'img': ['eswatini_1', 'eswatini_2', 'eswatini_3']},
        {'a': 'Ghana', 'img': ['ghana_1', 'ghana_2', 'ghana_3']},
        {'a': 'Kenya', 'img': ['kenya_1', 'kenya_2', 'kenya_3']},
        {'a': 'Lesotho', 'img': ['lesotho_1', 'lesotho_2', 'lesotho_3']},
        {'a': 'Madagascar', 'img': ['madagascar_1', 'madagascar_2', 'madagascar_3']},
        {'a': 'Nigeria', 'img': ['nigeria_1', 'nigeria_2', 'nigeria_3']},
        {'a': 'Senegal', 'img': ['senegal_1', 'senegal_2', 'senegal_3']},
        {'a': 'South Africa', 'img': ['south_africa_1', 'south_africa_2', 'south_africa_3']},
        {'a': 'Tunisia', 'img': ['tunisia_1', 'tunisia_2', 'tunisia_3']},
        {'a': 'Uganda', 'img': ['uganda_1', 'uganda_2', 'uganda_3']},
        {'a': 'Bangladesh', 'img': ['bangladesh_1', 'bangladesh_2', 'bangladesh_3']},
        {'a': 'Bhutan', 'img': ['bhutan_1', 'bhutan_2', 'bhutan_3']},
        {'a': 'Cambodia', 'img': ['cambodia_1', 'cambodia_2', 'cambodia_3']},
        {'a': 'Christmas Islands', 'img': ['christmas_islands_1', 'christmas_islands_2', 'christmas_islands_3']},
        {'a': 'India', 'img': ['india_1', 'india_2', 'india_3']},
        {'a': 'Indonesia', 'img': ['indonesia_1', 'indonesia_2', 'indonesia_3']},
        {'a': 'Israel', 'img': ['israel_1', 'israel_2', 'israel_3']},
        {'a': 'Japan', 'img': ['japan_1', 'japan_2', 'japan_3']},
        {'a': 'Jordan', 'img': ['jordan_1', 'jordan_2', 'jordan_3']},
        {'a': 'Kyrgyzstan', 'img': ['kyrgyzstan_1', 'kyrgyzstan_2', 'kyrgyzstan_3']},
        {'a': 'Laos', 'img': ['laos_1', 'laos_2', 'laos_3']},
        {'a': 'Malaysia', 'img': ['malaysia_1', 'malaysia_2', 'malaysia_3']},
        {'a': 'Mongolia', 'img': ['mongolia_1', 'mongolia_2', 'mongolia_3']},
        {'a': 'Philippines', 'img': ['philippines_1', 'philippines_2', 'philippines_3']},
        {'a': 'Russia', 'img': ['russia_1', 'russia_2', 'russia_3']},
        {'a': 'Singapore', 'img': ['singapore_1', 'singapore_2', 'singapore_3']},
        {'a': 'South Korea', 'img': ['south_korea_1', 'south_korea_2', 'south_korea_3']},
        {'a': 'Sri Lanka', 'img': ['sri_lanka_1', 'sri_lanka_2', 'sri_lanka_3']},
        {'a': 'Taiwan', 'img': ['taiwan_1', 'taiwan_2', 'taiwan_3']},
        {'a': 'Thailand', 'img': ['thailand_1', 'thailand_2', 'thailand_3']},
        {'a': 'United Arab Emirates', 'img': ['UAE_1', 'UAE_2', 'UAE_3']},
        {'a': 'Vietnam', 'img': ['vietnam_1', 'vietnam_2', 'vietnam_3']},
        {'a': 'Albania', 'img': ['albania_1', 'albania_2', 'albania_3']},
        {'a': 'Andorra', 'img': ['andorra_1', 'andorra_2', 'andorra_3']},
        {'a': 'Austria', 'img': ['austria_1', 'austria_2', 'austria_3']},
        {'a': 'Belgium', 'img': ['belgium_1', 'belgium_2', 'belgium_3']},
        {'a': 'Bulgaria', 'img': ['bulgaria_1', 'bulgaria_2', 'bulgaria_3']},
        {'a': 'Croatia', 'img': ['croatia_1', 'croatia_2', 'croatia_3']},
        {'a': 'Czech Republic', 'img': ['czech_republic_1', 'czech_republic_2', 'czech_republic_3']},
        {'a': 'Denmark', 'img': ['denmark_1', 'denmark_2', 'denmark_3']},
        {'a': 'Estonia', 'img': ['estonia_1', 'estonia_2', 'estonia_3']},
        {'a': 'Faroe Islands', 'img': ['faroe_islands_1', 'faroe_islands_2', 'faroe_islands_3']},
        {'a': 'Finland', 'img': ['finland_1', 'finland_2', 'finland_3']},
        {'a': 'France', 'img': ['france_1', 'france_2', 'france_3']},
        {'a': 'Germany', 'img': ['germany_1', 'germany_2', 'germany_3']},
        {'a': 'Gibraltar', 'img': ['gibraltar_1', 'gibraltar_2', 'gibraltar_3']},
        {'a': 'Greece', 'img': ['greece_1', 'greece_2', 'greece_3']},
        {'a': 'Hungary', 'img': ['hungary_1', 'hungary_2', 'hungary_3']},
        {'a': 'Iceland', 'img': ['iceland_1', 'iceland_2', 'iceland_3']},
        {'a': 'Ireland', 'img': ['ireland_1', 'ireland_2', 'ireland_3']},
        {'a': 'Isle of Man', 'img': ['isle_of_man_1', 'isle_of_man_2', 'isle_of_man_3']},
        {'a': 'Italy', 'img': ['italy_1', 'italy_2', 'italy_3']},
        {'a': 'Jersey', 'img': ['jersey_1', 'jersey_2', 'jersey_3']},
        {'a': 'Latvia', 'img': ['latvia_1', 'latvia_2', 'latvia_3']},
        {'a': 'Lithuania', 'img': ['lithuania_1', 'lithuania_2', 'lithuania_3']},
        {'a': 'Luxembourg', 'img': ['luxembourg_1', 'luxembourg_2', 'luxembourg_3']},
        {'a': 'Malta', 'img': ['malta_1', 'malta_2', 'malta_3']},
        {'a': 'Monaco', 'img': ['monaco_1', 'monaco_2', 'monaco_3']},
        {'a': 'Montenegro', 'img': ['montenegro_1', 'montenegro_2', 'montenegro_3']},
        {'a': 'Netherlands', 'img': ['netherlands_1', 'netherlands_2', 'netherlands_3']},
        {'a': 'North Macedonia', 'img': ['north_macedonia_1', 'north_macedonia_2', 'north_macedonia_3']},
        {'a': 'Norway', 'img': ['norway_1', 'norway_2', 'norway_3']},
        {'a': 'Poland', 'img': ['poland_1', 'poland_2', 'poland_3']},
        {'a': 'Portugal', 'img': ['portugal_1', 'portugal_2', 'portugal_3']},
        {'a': 'Romania', 'img': ['romania_1', 'romania_2', 'romania_3']},
        {'a': 'San Marino', 'img': ['san_marino_1', 'san_marino_2', 'san_marino_3']},
        {'a': 'Serbia', 'img': ['serbia_1', 'serbia_2', 'serbia_3']},
        {'a': 'Slovakia', 'img': ['slovakia_1', 'slovakia_2', 'slovakia_3']},
        {'a': 'Slovenia', 'img': ['slovenia_1', 'slovenia_2', 'slovenia_3']},
        {'a': 'Spain', 'img': ['spain_1', 'spain_2', 'spain_3']},
        {'a': 'Sweden', 'img': ['sweden_1', 'sweden_2', 'sweden_3']},
        {'a': 'Switzerland', 'img': ['switzerland_1', 'switzerland_2', 'switzerland_3']},
        {'a': 'Turkey', 'img': ['turkey_1', 'turkey_2', 'turkey_3']},
        {'a': 'Ukraine', 'img': ['ukraine_1', 'ukraine_2', 'ukraine_3']},
        {'a': 'United Kingdom', 'img': ['uk_1', 'uk_2', 'uk_3']},
        {'a': 'Canada', 'img': ['canada_1', 'canada_2', 'canada_3']},
        {'a': 'Curaçao', 'img': ['curacao_1', 'curacao_2', 'curacao_3']},
        {'a': 'Dominican Republic', 'img': ['dominican_republic_1', 'dominican_republic_2', 'dominican_republic_3']},
        {'a': 'Greenland', 'img': ['greenland_1', 'greenland_2', 'greenland_3']},
        {'a': 'Guatemala', 'img': ['guatemala_1', 'guatemala_2', 'guatemala_3']},
        {'a': 'Mexico', 'img': ['mexico_1', 'mexico_2', 'mexico_3']},
        {'a': 'Puerto Rico', 'img': ['puerto_rico_1', 'puerto_rico_2', 'puerto_rico_3']},
        {'a': 'United States', 'img': ['us_1', 'us_2', 'us_3']},
        {'a': 'US Virgin Islands', 'img': ['US_virgin_islands_1', 'US_virgin_islands_2', 'US_virgin_islands_3']},
        {'a': 'American Samoa', 'img': ['american_samoa_1', 'american_samoa_2', 'american_samoa_3']},
        {'a': 'Australia', 'img': ['australia_1', 'australia_2', 'australia_3']},
        {'a': 'Guam', 'img': ['guam_1', 'guam_2', 'guam_3']},
        {'a': 'New Zealand', 'img': ['new_zealand_1', 'new_zealand_2', 'new_zealand_3']},
        {'a': 'Northern Mariana Islands', 'img': ['northern_mariana_islands_1', 'northern_mariana_islands_2', 'northern_mariana_islands_3']},
        {'a': 'Argentina', 'img': ['argentina_1', 'argentina_2', 'argentina_3']},
        {'a': 'Bolivia', 'img': ['bolivia_1', 'bolivia_2', 'bolivia_3']},
        {'a': 'Brazil', 'img': ['brazil_1', 'brazil_2', 'brazil_3']},
        {'a': 'Chile', 'img': ['chile_1', 'chile_2', 'chile_3']},
        {'a': 'Colombia', 'img': ['colombia_1', 'colombia_2', 'colombia_3']},
        {'a': 'Ecuador', 'img': ['ecuador_1', 'ecuador_2', 'ecuador_3']},
        {'a': 'Peru', 'img': ['peru_1', 'peru_2', 'peru_3']},
        {'a': 'Uruguay', 'img': ['uruguay_1', 'uruguay_2', 'uruguay_3']}
        ];
        sourcePath = 'Scenery';
        break;
    case 'Sidewalks.html':
        Questions = [{'a': 'Eswatini', 'img': ['1']},
        {'a': 'Nigeria', 'img': ['29']},
        {'a': 'Tunisia', 'img': ['2']},
        {'a': 'Christmas Island', 'img': ['3']},
        {'a': 'Indonesia', 'img': ['4', '27']},
        {'a': 'Israel', 'img': ['5']},
        {'a': 'Jordan', 'img': ['6']},
        {'a': 'Laos', 'img': ['7', '8', '9']},
        {'a': 'Malaysia', 'img': ['10']},
        {'a': 'Russia', 'img': ['11']},
        {'a': 'United Arab Emirates', 'img': ['12', '13']},
        {'a': 'Belgium', 'img': ['28']},
        {'a': 'Croatia', 'img': ['14']},
        {'a': 'Iceland', 'img': ['15']},
        {'a': 'Ireland', 'img': ['16']},
        {'a': 'Latvia', 'img': ['17']},
        {'a': 'Netherlands', 'img': ['18', '20']},
        {'a': 'Portugal', 'img': ['19']},
        {'a': 'Romania', 'img': ['26']},
        {'a': 'Slovenia', 'img': ['21']},
        {'a': 'Spain', 'img': ['22']},
        {'a': 'Turkey', 'img': ['23']},
        {'a': 'United Kingdom', 'img': ['24']},
        {'a': 'American Samoa', 'img': ['25']}
        ];
        sourcePath = 'Sidewalks';
        preSource = 'sidewalk_';
        break;
    case 'Poles.html':
        Questions = [{'a': 'Botswana', 'img': ['1', '2']},
        {'a': 'Eswatini', 'img': ['65']},
        {'a': 'Madagascar', 'img': ['55']},
        {'a': 'Nigeria', 'img': ['71']},
        {'a': 'Cambodia', 'img': ['3', '4', '5']},
        {'a': 'Indonesia', 'img': ['73']},
        {'a': 'Japan', 'img': ['6', '7', '8', '69', '76']},
        {'a': 'Malaysia', 'img': ['9']},
        {'a': 'South Korea', 'img': ['10']},
        {'a': 'Singapore', 'img': ['11']},
        {'a': 'Taiwan', 'img': ['12']},
        {'a': 'Thailand', 'img': ['13']},
        {'a': 'Estonia', 'img': ['68', '77', '78', '79', '80', '81', '82', '83', '84', '85', '87', '88']},
        {'a': 'France', 'img': ['60']},
        {'a': 'Hungary', 'img': ['14']},
        {'a': 'Ireland', 'img': ['15']},
        {'a': 'Latvia', 'img': ['67', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98']},
        {'a': 'Lithuania', 'img': ['66', '99', '100', '101', '102', '103', '74']},
        {'a': 'Luxembourg', 'img': ['16']},
        {'a': 'Montenegro', 'img': ['17']},
        {'a': 'Norway', 'img': ['18']},
        {'a': 'Poland', 'img': ['19', '20', '21']},
        {'a': 'Portugal', 'img': ['22', '23']},
        {'a': 'Romania', 'img': ['24']},
        {'a': 'Slovakia', 'img': ['25', '26']},
        {'a': 'Spain', 'img': ['27']},
        {'a': 'Sweden', 'img': ['28', '29']},
        {'a': 'United Kingdom', 'img': ['30']},
        {'a': 'Canada', 'img': ['31', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '59']},
        {'a': 'Curaçao', 'img': ['32']},
        {'a': 'Dominican Republic', 'img': ['33', '34']},
        {'a': 'Greenland', 'img': ['35']},
        {'a': 'Mexico', 'img': ['36']},
        {'a': 'Australia', 'img': ['56', '61', '62', '63']},
        {'a': 'Guam', 'img': ['58']},
        {'a': 'New Zealand', 'img': ['37', '57']},
        {'a': 'Argentina', 'img': ['72']},
        {'a': 'Brazil', 'img': ['38']},
        {'a': 'Chile', 'img': ['39']},
        {'a': 'Colombia', 'img': ['64', '70', '75']},
        {'a': 'Ecuador', 'img': ['40']}
        ];
        sourcePath = 'Poles';
        preSource = 'pole_';
        break;
    default:
        quizInit = false;
        
}

if (quizInit) {
    var panel = document.createElement('div');
    var result = document.createElement('div');
    var questionCont = document.createElement('div');
    var quizPic = document.createElement('img');
    var optionCont = document.createElement('div');
    var op1 = document.createElement('button');
    var op2 = document.createElement('button');
    var op3 = document.createElement('button');
    var op4 = document.createElement('button');
    var navigation = document.createElement('div');
    // var evaluate = document.createElement('button');
    var next = document.createElement('button');

    panel.className = 'panel';
    result.className = 'result';
    questionCont.className = 'question-conatiner';
    questionCont.id = 'question';
    quizPic.src = 'Sources/Houses/lesotho_1.jpg';
    quizPic.className = 'noZoomCar';
    quizPic.id = 'quizPic';
    quizPic.onclick = 'onClickS(this)';
    optionCont.className = 'option-container';
    op1.className = 'option';
    op2.className = 'option';
    op3.className = 'option';
    op4.className = 'option';
    op1.id = 'op1';
    op2.id = 'op2';
    op3.id = 'op3';
    op4.id = 'op4';
    op1.innerText = 'option1';
    op2.innerText = 'option2';
    op3.innerText = 'option3';
    op4.innerText = 'option4';
    navigation.className = 'navigation';
    // evaluate.className = 'evaluate';
    next.className = 'next';
    // evaluate.innerText = 'Evaluate';
    next.innerText = 'Next';

    // container.insertBefore(newFreeformLabel, container.firstChild);
    document.body.insertBefore(panel, document.body.firstChild);
    panel.appendChild(result);
    panel.appendChild(questionCont);
    questionCont.appendChild(quizPic);
    panel.appendChild(optionCont);
    optionCont.appendChild(op1);
    optionCont.appendChild(op2);
    optionCont.appendChild(op3);
    optionCont.appendChild(op4);
    panel.appendChild(navigation);
    // navigation.appendChild(evaluate);
    navigation.appendChild(next);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomIndex(array) {
    return getRandomInt(array.length);
}

function getRandomItem(array) {
    return array[getRandomIndex(array)];
}

function getUniqAns(answerList, answer) {
    while (true) {
        var uniqAns = getRandomItem(Questions).a;
        if (!answerList.includes(uniqAns) && uniqAns != answer) {
            return uniqAns;
        }
    }
}

function answers(answer) {
    var correct = false;
    var answerList = [null, null, null, null, null]
    for (let i = 0; i < 4; i++) {
        if (correct) {
            answerList[i] = getUniqAns(answerList, answer);
        } else if (i == 3) {
            answerList[i] = answer;
            answerList[4] = i;
        } else {
            if (getRandomInt(4-i) == 0) {
                answerList[i] = answer;
                answerList[4] = i;
                correct = true;
            } else {
                answerList[i] = getUniqAns(answerList, answer);
            }
        }
    }
    return answerList;
}

var start = true;

function quiz() {

    // Get the question
    var question = getRandomItem(Questions);
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";

    // Getting the result display section
    // var result = elementList[0];
    result.innerText = "";

    // Getting the question
    // const displayQuestion = elementList[1];

    // Setting the question text
    quizPic.src = `Sources/${sourcePath}/${preSource}${getRandomItem(question.img)}.${ending}`;

    // Getting the options
    // const op1 = elementList[2];
    // const op2 = elementList[3];
    // const op3 = elementList[4];
    // const op4 = elementList[5];

    // Providing the option text
    var options = answers(question.a);
    op1.innerText = options[0];
    op2.innerText = options[1];
    op3.innerText = options[2];
    op4.innerText = options[3];

    var selected = null;

    // Show selection for ops
    op1.addEventListener("click", () => {
        // op1.style.backgroundColor = "lightgoldenrodyellow";
        // op2.style.backgroundColor = "lightskyblue";
        // op3.style.backgroundColor = "lightskyblue";
        // op4.style.backgroundColor = "lightskyblue";
        // selected = 0;
        if (0 == options[4]) {
            op1.style.backgroundColor = correct;
        } else {
            op1.style.backgroundColor = incorrect;
        }
    })

    op2.addEventListener("click", () => {
        // op1.style.backgroundColor = "lightskyblue";
        // op2.style.backgroundColor = "lightgoldenrodyellow";
        // op3.style.backgroundColor = "lightskyblue";
        // op4.style.backgroundColor = "lightskyblue";
        // selected = 1;
        if (1 == options[4]) {
            op2.style.backgroundColor = correct;
        } else {
            op2.style.backgroundColor = incorrect;
        }
    })

    op3.addEventListener("click", () => {
        // op1.style.backgroundColor = "lightskyblue";
        // op2.style.backgroundColor = "lightskyblue";
        // op3.style.backgroundColor = "lightgoldenrodyellow";
        // op4.style.backgroundColor = "lightskyblue";
        // selected = 2;
        if (2 == options[4]) {
            op3.style.backgroundColor = correct;
        } else {
            op3.style.backgroundColor = incorrect;
        }
    })

    op4.addEventListener("click", () => {
        // op1.style.backgroundColor = "lightskyblue";
        // op2.style.backgroundColor = "lightskyblue";
        // op3.style.backgroundColor = "lightskyblue";
        // op4.style.backgroundColor = "lightgoldenrodyellow";
        // selected = 3;
        if (3 == options[4]) {
            op4.style.backgroundColor = correct;
        } else {
            op4.style.backgroundColor = incorrect;
        }
    })

    // Grabbing the evaluate button
    // const evaluate = elementList[6];

    // Evaluate method
    // evaluate.addEventListener("click", () => {
    //     if (selected == options[4]) {
    //         result.innerHTML = "Correct!";
    //         result.style.color = "green";
    //     } else {
    //         result.innerHTML = "Incorrect...";
    //         result.style.color = "red";
    //     }
    // })
}

// Get list of elements
// function getElements() {
//     var result = document.getElementsByClassName("result");
//     const displayQuestion = document.getElementById("quizPic");
//     const op1 = document.getElementById('op1');
//     const op2 = document.getElementById('op2');
//     const op3 = document.getElementById('op3');
//     const op4 = document.getElementById('op4');
//     const evaluate = document.getElementsByClassName("evaluate");

//     const next = document.getElementsByClassName('next')[0];

//     var elements = [result, displayQuestion, op1, op2, op3, op4, evaluate, next];

//     return elements
// }

// Next button and method
if (quizInit) {
    next.addEventListener('click', () => {
        quiz();
    })
    quiz();
}

// if (document.readyState != 'loading') {
//     console.log('document is already ready, just execute code here');
//     var elements = getElements();

//     console.log(elements[0]);
//     console.log(elements[1]);
//     console.log(elements[2]);
//     console.log(elements[3]);
//     console.log(elements[4]);
//     console.log(elements[5]);
//     console.log(elements[6]);
//     console.log(elements[7]);

//     quiz(elements);

//     elements[7].addEventListener("click", () => {
//         quiz(elements);
//     })
// } else {
//     document.addEventListener('DOMContentLoaded', function () {
//         console.log('document was not ready, place code here');

//         quiz(elements);

//         elements[7].addEventListener("click", () => {
//             quiz(elements);
//         })
//     })
// }