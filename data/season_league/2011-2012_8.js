﻿var arrLeague = [8,'德国甲组联赛','德國甲組聯賽','German Bundesliga','2011-2012','#990099','league_match/images/20130119152241.jpg',34,34,'德甲','德甲','GER D1','　　09/10赛季德国足球甲级联赛共由18支球队组成，采取双循环赛制（每支球队分别以主、客场身份和其他球队交锋两次）。单场比赛积分计算方法是胜者得3分、负者得0分、平局则双方各得1分，赛季末按累计积分高低排名，同分则依次按照淨胜球、进球数的多少来决定名次。&nbsp;<br/>　　联赛前两名直接参加10/11赛季冠军联赛小组赛，第三名取得参加10/11赛季冠军联赛外围赛的资格，四、五名参加10/11赛季欧霸杯联赛（德国盃冠军也可以参加欧霸杯联赛，而如果德国盃冠军已经取得欧战资格，则其名额将让给德国盃亚军）。联赛排名最后2名的球队直接降到乙级联赛，而倒数第三名则与乙级联赛第三名进行主客场两回合的升降级附加赛。'];
var arrTeam = [[139,'柏林赫塔','哈化柏林','Hertha Berlin','哈化柏林','images/201312095315.jpg'],[99,'多特蒙德','多蒙特','Borussia Dortmund','多蒙特','images/2013119144655.jpg'],[160,'汉堡','漢堡','Hamburger SV','漢堡','images/2013119151640.jpg'],[162,'美因茨','緬恩斯','FSV Mainz 05','緬恩斯','images/201312093847.jpg'],[149,'沃尔夫斯堡','沃爾夫斯堡','VfL Wolfsburg','沃爾夫斯堡','images/2013119145123.jpg'],[88,'拜仁慕尼黑','拜仁慕尼黑','Bayern Munchen','拜仁慕尼黑','images/2013117153233.jpg'],[1078,'霍芬海姆','賀芬咸','TSG Hoffenheim','賀芬咸','images/201312092935.jpg'],[128,'门兴格拉德巴赫','慕遜加柏','Borussia Monchengladbach','慕遜加柏','images/2013119144848.jpg'],[155,'斯图加特','史特加','VfB Stuttgart','史特加','images/2013119145440.jpg'],[1135,'奥格斯堡','奧格斯堡','Augsburg','奧格斯堡','images/201312093038.jpg'],[165,'勒沃库森','利華古遜','Bayer Leverkusen','利華古遜','images/2013117153453.jpg'],[172,'弗赖堡','費雷堡','SC Freiburg','費雷堡','images/201312094312.jpg'],[490,'科隆','科隆','FC Cologne','科隆','images/2013120101406.jpg'],[151,'沙尔克04','史浩克零四','Schalke 04','史浩克零四','images/2013119145317.jpg'],[169,'汉诺威96','漢諾威','Hannover 96','漢諾威','images/201312092606.jpg'],[136,'纽伦堡','紐倫堡','Nurnberg','紐倫堡','images/2013119145001.jpg'],[132,'云达不来梅','雲達不萊梅','Werder Bremen','雲達不萊梅','images/2013119144220.jpg'],[175,'凯泽斯劳滕','凱沙羅頓','Kaiserslautern','凱沙羅頓','images/201312095551.jpg']];
jh["R_1"] = [[563866,8,-1,'2011-08-06 02:30',99,160,'3-1','2-0','1','8',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[563867,8,-1,'2011-08-06 21:30',169,1078,'2-1','2-1','4','11',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[563869,8,-1,'2011-08-06 21:30',132,175,'2-0','0-0','13','7',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[563870,8,-1,'2011-08-06 21:30',155,151,'3-0','1-0','12','14',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[563872,8,-1,'2011-08-06 21:30',490,149,'0-3','0-1','10','15',-0.25,0,'2.5','1',1,1,1,1,1,0,''],[563873,8,-1,'2011-08-06 21:30',1135,172,'2-2','0-0','','9',0.25,0,'2.5','1',1,1,1,1,0,0,''],[563874,8,-1,'2011-08-07 00:30',139,136,'0-1','0-0','','6',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[563868,8,-1,'2011-08-07 21:30',162,165,'2-0','1-0','5','2',-0.25,-0.25,'2.5','1',1,1,1,1,0,0,''],[563871,8,-1,'2011-08-07 23:30',88,128,'0-1','0-0','3','16',1.75,0.75,'3/3.5','1/1.5',1,1,1,1,0,0,'']];
jh["R_2"] = [[563875,8,-1,'2011-08-13 21:30',151,490,'5-1','1-1','18','17',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[563876,8,-1,'2011-08-13 21:30',160,139,'2-2','1-1','14','13',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[563877,8,-1,'2011-08-13 21:30',136,169,'1-2','0-2','7','6',0.25,0,'2.5','1',1,1,1,1,0,0,''],[563882,8,-1,'2011-08-13 21:30',1078,99,'1-0','1-0','11','3',-0.75,-0.25,'3','1/1.5',1,1,1,1,0,0,''],[563883,8,-1,'2011-08-13 21:30',149,88,'0-1','0-0','1','12',-0.5,-0.25,'3/3.5','1/1.5',1,1,1,1,0,0,''],[563879,8,-1,'2011-08-13 21:30',172,162,'1-2','0-0','9','5',0.25,0,'2.5','1',1,1,1,1,0,0,''],[563880,8,-1,'2011-08-14 00:30',128,155,'1-1','0-0','8','2',0,0,'3','1/1.5',1,1,1,1,1,0,''],[563881,8,-1,'2011-08-14 21:30',175,1135,'1-1','0-1','17','12',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[563878,8,-1,'2011-08-14 23:30',165,132,'1-0','0-0','16','6',0.5,0.25,'3','1/1.5',1,1,1,1,0,0,'']];
jh["R_3"] = [[563891,8,-1,'2011-08-20 02:30',128,149,'4-1','3-1','4','5',0,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563892,8,-1,'2011-08-20 21:30',99,136,'2-0','0-0','7','9',1.5,0.75,'3','1/1.5',1,1,1,1,0,0,''],[563888,8,-1,'2011-08-20 21:30',1135,1078,'0-2','0-1','13','10',0,0,'2.5','1',1,1,1,1,0,0,''],[563889,8,-1,'2011-08-20 21:30',155,165,'0-1','0-1','3','12',0,0,'2.5/3','1/1.5',1,1,1,1,1,0,''],[563884,8,-1,'2011-08-20 21:30',88,160,'5-0','3-0','11','16',1.5,0.5,'3','1/1.5',1,1,1,1,0,0,''],[563885,8,-1,'2011-08-20 21:30',132,172,'5-3','2-1','8','14',0.75,0.25,'3','1/1.5',1,1,1,1,0,0,''],[563890,8,-1,'2011-08-21 00:30',490,175,'1-1','1-1','18','17',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[563887,8,-1,'2011-08-21 21:30',162,151,'2-4','2-0','5','10',0,0,'2.5','1',1,1,1,1,0,0,''],[563886,8,-1,'2011-08-21 23:30',169,139,'1-1','1-0','6','15',0.5,0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_4"] = [[563898,8,-1,'2011-08-27 02:30',139,155,'1-0','0-0','13','10',0,0,'2.5','1',1,1,1,1,0,0,''],[563899,8,-1,'2011-08-27 21:30',172,149,'3-0','2-0','16','11',-0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[563900,8,-1,'2011-08-27 21:30',175,88,'0-3','0-1','15','3',-0.75,-0.25,'2.5/3','1/1.5',1,1,1,1,1,0,''],[563901,8,-1,'2011-08-27 21:30',1078,132,'1-2','1-1','7','5',0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[563894,8,-1,'2011-08-27 21:30',160,490,'3-4','1-1','17','18',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[563897,8,-1,'2011-08-27 21:30',136,1135,'1-0','0-0','12','14',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[563896,8,-1,'2011-08-28 00:30',165,99,'0-0','0-0','9','6',0,0,'2.5/3','1/1.5',1,1,1,1,1,1,''],[563895,8,-1,'2011-08-28 21:30',169,162,'1-1','1-1','5','8',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[563893,8,-1,'2011-08-28 23:30',151,128,'1-0','0-0','7','3',0.75,0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_5"] = [[563907,8,-1,'2011-09-10 02:30',1135,165,'1-4','1-2','16','8',-0.5,-0.25,'2.5','1',1,1,1,1,0,0,''],[563910,8,-1,'2011-09-10 21:30',128,175,'1-0','0-0','6','16',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[563904,8,-1,'2011-09-10 21:30',162,1078,'0-4','0-2','8','9',0.25,0,'2.5','1',1,1,1,1,0,0,''],[563905,8,-1,'2011-09-10 21:30',99,139,'1-2','0-0','7','11',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563906,8,-1,'2011-09-10 21:30',155,169,'3-0','1-0','12','5',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[563902,8,-1,'2011-09-10 21:30',88,172,'7-0','3-0','2','13',2,0.75,'3/3.5','1.5',1,1,1,1,0,0,''],[563903,8,-1,'2011-09-11 00:30',132,160,'2-0','0-0','4','18',1,0.25,'3','1/1.5',1,1,1,1,0,0,''],[563908,8,-1,'2011-09-11 21:30',490,136,'1-2','1-2','14','10',0,0,'2.5','1',1,1,1,1,1,1,''],[563909,8,-1,'2011-09-11 23:30',149,151,'2-1','1-1','15','6',0,0,'2.5','1',1,1,1,1,0,0,'']];
jh["R_6"] = [[563916,8,-1,'2011-09-17 02:45',172,155,'1-2','0-1','14','10',-0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[563912,8,-1,'2011-09-17 21:30',160,128,'0-1','0-0','18','3',0,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563913,8,-1,'2011-09-17 21:30',165,490,'1-4','0-1','4','15',1,0.5,'2.5/3','1/1.5',1,1,1,1,1,0,''],[563914,8,-1,'2011-09-17 21:30',136,132,'1-1','0-1','7','2',0,0,'2.5/3','1/1.5',1,1,1,1,0,1,''],[563915,8,-1,'2011-09-17 21:30',139,1135,'2-2','0-1','8','16',0.75,0.25,'2.5','1',1,1,1,1,0,1,''],[563918,8,-1,'2011-09-17 21:30',1078,149,'3-1','2-0','5','13',0.25,0.25,'2.5/3','1',1,1,1,1,0,1,''],[563917,8,-1,'2011-09-18 00:30',175,162,'3-1','1-1','17','12',0.25,0,'2.5','1',1,1,1,1,0,0,''],[563919,8,-1,'2011-09-18 21:30',169,99,'2-1','0-0','10','11',-0.5,-0.25,'2.5','1',1,1,1,1,1,0,''],[563911,8,-1,'2011-09-18 23:30',151,88,'0-2','0-1','8','3',-0.5,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_7"] = [[563924,8,-1,'2011-09-24 02:40',155,160,'1-2','1-0','6','18',1,0.25,'3','1/1.5',1,1,1,1,0,0,''],[563925,8,-1,'2011-09-24 21:30',1135,169,'0-0','0-0','17','5',-0.5,-0.25,'2.5','1',1,1,1,1,0,0,''],[563920,8,-1,'2011-09-24 21:30',151,172,'4-2','1-1','9','16',1.5,0.5,'3','1/1.5',1,1,1,1,0,0,''],[563922,8,-1,'2011-09-24 21:30',162,99,'1-2','1-0','13','11',-0.5,-0.25,'2.5','1',1,1,1,1,0,0,''],[563927,8,-1,'2011-09-24 21:30',149,175,'1-0','0-0','14','15',1,0.25,'2.5/3','1',1,1,1,1,1,0,''],[563928,8,-1,'2011-09-24 21:30',128,136,'1-0','0-0','3','8',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[563923,8,-1,'2011-09-25 00:30',88,165,'3-0','2-0','1','7',1.25,0.5,'3','1/1.5',1,1,1,1,0,0,''],[563926,8,-1,'2011-09-25 21:30',490,1078,'2-0','1-0','12','4',0,0,'2.5','1',1,1,1,1,0,0,''],[563921,8,-1,'2011-09-25 23:30',132,139,'2-1','1-1','2','10',0.75,0.25,'3','1/1.5',1,1,1,1,0,2,'']];
jh["R_8"] = [[563934,8,-1,'2011-10-01 02:40',175,155,'0-2','0-0','15','7',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[563935,8,-1,'2011-10-01 21:30',1078,88,'0-0','0-0','5','1',-0.75,-0.25,'3','1/1.5',1,1,1,1,0,0,''],[563936,8,-1,'2011-10-01 21:30',99,1135,'4-0','2-0','8','16',1.75,0.75,'3','1/1.5',1,1,1,1,0,0,''],[563932,8,-1,'2011-10-01 21:30',136,162,'3-3','2-2','9','14',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[563933,8,-1,'2011-10-01 21:30',172,128,'1-0','1-0','17','3',0,0,'2.5/3','1',1,1,1,1,0,0,''],[563929,8,-1,'2011-10-01 21:30',165,149,'3-1','1-0','11','13',0.75,0.25,'3','1/1.5',1,1,1,1,0,0,''],[563937,8,-1,'2011-10-02 00:30',139,490,'3-0','3-0','12','10',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563931,8,-1,'2011-10-02 21:30',169,132,'3-2','2-1','10','2',0,0,'2.5/3','1/1.5',1,1,1,1,0,1,''],[563930,8,-1,'2011-10-02 23:30',160,151,'1-2','1-1','17','8',-0.25,-0.25,'2.5/3','1',1,1,1,1,0,0,'']];
jh["R_9"] = [[563939,8,-1,'2011-10-15 02:30',132,99,'0-2','0-1','2','6',-0.25,0,'2.5','1',1,1,1,1,0,1,''],[563940,8,-1,'2011-10-15 21:30',162,1135,'0-1','0-0','14','17',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[563941,8,-1,'2011-10-15 21:30',88,139,'4-0','3-0','1','10',2,0.75,'3.5','1.5',1,1,1,1,0,0,''],[563943,8,-1,'2011-10-15 21:30',128,165,'2-2','0-1','3','9',0,0,'2.5','1',1,1,1,1,0,1,''],[563944,8,-1,'2011-10-15 21:30',155,1078,'2-0','0-0','7','8',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[563946,8,-1,'2011-10-15 21:30',149,136,'2-1','1-0','13','11',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[563938,8,-1,'2011-10-16 00:30',151,175,'1-2','0-1','4','16',1,0.25,'2.5/3','1',1,1,1,1,1,1,''],[563942,8,-1,'2011-10-16 21:30',172,160,'1-2','0-1','15','18',0,0,'2.5/3','1',1,1,1,1,0,0,''],[563945,8,-1,'2011-10-16 23:30',490,169,'2-0','1-0','12','5',0,0,'2.5','1',1,1,1,1,0,0,'']];
jh["R_10"] = [[563955,8,-1,'2011-10-22 02:30',1135,132,'1-1','0-0','16','5',-0.5,-0.25,'2.5/3','1',1,1,1,1,0,0,''],[563950,8,-1,'2011-10-22 21:30',99,490,'5-0','3-0','4','10',1.5,0.5,'3','1/1.5',1,1,1,1,0,0,''],[563951,8,-1,'2011-10-22 21:30',136,155,'2-2','1-0','13','5',0,0,'2.5','1',1,1,1,1,0,0,''],[563952,8,-1,'2011-10-22 21:30',139,162,'0-0','0-0','11','15',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[563953,8,-1,'2011-10-22 21:30',175,172,'1-0','0-0','14','17',0.25,0.25,'2.5/3','1',1,1,1,1,0,0,''],[563954,8,-1,'2011-10-22 21:30',1078,128,'1-0','0-0','9','2',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[563948,8,-1,'2011-10-23 00:30',160,149,'1-1','0-1','18','12',0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[563947,8,-1,'2011-10-23 21:30',165,151,'0-1','0-0','8','6',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563949,8,-1,'2011-10-23 23:30',169,88,'2-1','1-0','7','1',-1,-0.5,'3','1/1.5',1,1,1,1,1,1,'']];
jh["R_11"] = [[563960,8,-1,'2011-10-29 02:30',172,165,'0-1','0-1','18','9',-0.5,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563961,8,-1,'2011-10-29 21:30',128,169,'2-1','1-1','7','4',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[563956,8,-1,'2011-10-29 21:30',151,1078,'3-1','1-0','3','9',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[563959,8,-1,'2011-10-29 21:30',88,136,'4-0','3-0','1','13',2,0.75,'3/3.5','1.5',1,1,1,1,0,0,''],[563964,8,-1,'2011-10-29 21:30',149,139,'2-3','1-2','11','10',0.25,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563962,8,-1,'2011-10-29 21:45',155,99,'1-1','1-1','5','2',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[563958,8,-1,'2011-10-30 00:30',162,132,'1-3','1-1','15','6',0,0,'2.5/3','1',1,1,1,1,0,0,''],[563963,8,-1,'2011-10-30 22:30',490,1135,'3-0','2-0','12','16',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,1,''],[563957,8,-1,'2011-10-31 00:30',160,175,'1-1','0-1','17','14',0.5,0.25,'2.5','1',1,1,1,1,1,0,'']];
jh["R_12"] = [[563968,8,-1,'2011-11-05 03:30',162,155,'3-1','0-0','15','6',0,0,'2.5','1',1,1,1,1,1,0,''],[563969,8,-1,'2011-11-05 22:30',136,172,'1-2','1-1','14','18',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[563970,8,-1,'2011-11-05 22:30',1078,175,'1-1','1-0','9','13',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[563966,8,-1,'2011-11-05 22:30',132,490,'3-2','0-2','4','11',1,0.5,'3','1/1.5',1,1,1,1,0,1,''],[563972,8,-1,'2011-11-05 22:30',99,149,'5-1','2-0','3','12',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563973,8,-1,'2011-11-05 22:30',139,128,'1-2','1-1','10','5',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[563965,8,-1,'2011-11-06 01:30',165,160,'2-2','2-1','8','16',1,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563967,8,-1,'2011-11-06 22:30',169,151,'2-2','1-1','7','2',0,0,'2.5','1',1,1,1,1,0,0,''],[563971,8,-1,'2011-11-07 00:30',1135,88,'1-2','0-2','17','1',-1.5,-0.75,'3/3.5','1/1.5',1,1,1,1,0,1,'']];
jh["R_13"] = [[563978,8,-1,'2011-11-19 03:30',175,165,'0-2','0-0','12','8',-0.25,-0.25,'2.5','1',1,1,1,1,0,0,''],[563979,8,-1,'2011-11-19 22:30',128,132,'5-0','3-0','4','3',0,0,'2.5','1',1,1,1,1,0,1,''],[563974,8,-1,'2011-11-19 22:30',151,136,'4-0','2-0','5','15',0.75,0.5,'2.5/3','1',1,1,1,1,0,0,''],[563976,8,-1,'2011-11-19 22:30',172,139,'2-2','0-2','17','10',0,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563982,8,-1,'2011-11-19 22:30',149,169,'4-1','2-1','13','6',0.25,0,'2.5/3','1',1,1,1,1,0,1,''],[563977,8,-1,'2011-11-20 01:30',88,99,'0-1','0-0','1','2',1,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563980,8,-1,'2011-11-20 22:30',155,1135,'2-1','1-0','8','18',1.25,0.5,'2.5/3','1',1,1,1,1,0,0,''],[563975,8,-1,'2011-11-21 00:30',160,1078,'2-0','1-0','17','9',0.25,0,'2.5','1',1,1,1,1,0,0,''],[563981,8,-1,'2011-12-14 03:30',490,162,'1-1','0-0','10','13',0,0,'2.5','1',1,1,1,1,0,0,'']];
jh["R_14"] = [[563988,8,-1,'2011-11-26 03:30',490,128,'0-3','0-2','11','3',0,0,'2.5','1',1,1,1,1,0,0,''],[563989,8,-1,'2011-11-26 22:30',1135,149,'2-0','0-0','18','11',-0.25,-0.25,'2.5','1',1,1,1,1,0,0,''],[563990,8,-1,'2011-11-26 22:30',99,151,'2-0','1-0','3','4',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[563991,8,-1,'2011-11-26 22:30',139,165,'3-3','2-1','10','7',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[563986,8,-1,'2011-11-26 22:30',136,175,'1-0','1-0','16','13',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[563987,8,-1,'2011-11-26 22:30',1078,172,'1-1','1-0','9','17',1,0.5,'2.5/3','1',1,1,1,1,0,0,''],[563984,8,-1,'2011-11-27 01:30',169,160,'1-1','0-0','8','14',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[563983,8,-1,'2011-11-27 22:30',132,155,'2-0','0-0','5','7',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563985,8,-1,'2011-11-28 00:30',162,88,'3-2','1-0','16','3',-1.5,-0.75,'3','1/1.5',1,1,1,1,0,0,'']];
jh["R_15"] = [[563999,8,-1,'2011-12-03 03:30',165,1078,'2-0','1-0','6','9',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[564000,8,-1,'2011-12-03 22:30',128,99,'1-1','0-1','2','1',-0.25,-0.25,'2.5/3','1',1,1,1,1,0,0,''],[563992,8,-1,'2011-12-03 22:30',88,132,'4-1','1-0','3','4',1.5,0.5,'3','1/1.5',1,1,1,1,0,1,''],[563995,8,-1,'2011-12-03 22:30',172,169,'1-1','0-1','17','8',0,0,'2.5','1',1,1,1,1,0,0,''],[563996,8,-1,'2011-12-03 22:30',175,139,'1-1','1-1','16','10',0.25,0,'2.5','1',1,1,1,1,0,0,''],[563998,8,-1,'2011-12-03 22:30',149,162,'2-2','2-0','12','13',0.25,0,'2.5/3','1',1,1,1,1,1,0,''],[563997,8,-1,'2011-12-04 01:30',155,490,'2-2','2-1','7','11',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[563994,8,-1,'2011-12-04 22:30',160,136,'2-0','1-0','15','14',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[563993,8,-1,'2011-12-05 00:30',151,1135,'3-1','1-0','5','18',1.5,0.75,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_16"] = [[564006,8,-1,'2011-12-10 03:30',139,151,'1-2','1-2','9','4',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[564003,8,-1,'2011-12-10 22:30',162,160,'0-0','0-0','14','11',0.25,0.25,'2.5/3','1',1,1,1,1,0,0,''],[564001,8,-1,'2011-12-10 22:30',132,149,'4-1','2-0','5','13',0.75,0.25,'3','1/1.5',1,1,1,1,0,0,''],[564008,8,-1,'2011-12-10 22:30',490,172,'4-0','1-0','12','17',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[564009,8,-1,'2011-12-10 22:30',1135,128,'1-0','0-0','18','3',-0.5,-0.25,'2.5','1',1,1,1,1,0,0,''],[564005,8,-1,'2011-12-10 22:30',136,1078,'0-2','0-1','15','10',0.25,0,'2.5','1',1,1,1,1,1,1,''],[564002,8,-1,'2011-12-11 01:30',169,165,'0-0','0-0','8','6',0,0,'2.5','1',1,1,1,1,0,0,''],[564004,8,-1,'2011-12-11 22:30',99,175,'1-1','1-0','3','16',1.75,0.75,'3','1/1.5',1,1,1,1,0,0,''],[564007,8,-1,'2011-12-12 00:30',155,88,'1-2','1-1','7','1',-1,-0.25,'2.5/3','1/1.5',1,1,1,1,1,0,'']];
jh["R_17"] = [[564010,8,-1,'2011-12-17 03:30',88,490,'3-0','0-0','1','10',2.25,1,'3/3.5','1.5',1,1,1,1,1,0,''],[564015,8,-1,'2011-12-17 22:30',1078,139,'1-1','1-0','9','11',0.5,0.25,'2.5','1',1,1,1,1,1,1,''],[564016,8,-1,'2011-12-17 22:30',149,155,'1-0','0-0','14','7',0,0,'2.5/3','1',1,1,1,1,0,0,''],[564017,8,-1,'2011-12-17 22:30',165,136,'0-3','0-2','6','16',1,0.5,'2.5','1',1,1,1,1,0,0,''],[564012,8,-1,'2011-12-17 22:30',160,1135,'1-1','0-0','13','17',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[564013,8,-1,'2011-12-17 22:30',172,99,'1-4','1-2','18','2',-1,-0.25,'2.5/3','1',1,1,1,1,0,0,''],[564011,8,-1,'2011-12-18 01:30',151,132,'5-0','2-0','3','5',0.25,0.25,'2.5/3','1',1,1,1,1,0,0,''],[564014,8,-1,'2011-12-18 22:30',175,169,'1-1','0-1','16','9',0.25,0,'2.5','1',1,1,1,1,1,0,''],[564018,8,-1,'2011-12-19 00:30',128,162,'1-0','1-0','4','14',0.5,0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_18"] = [[564019,8,-1,'2012-01-21 03:30',128,88,'3-1','2-0','4','1',-0.75,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564021,8,-1,'2012-01-21 22:30',1078,169,'0-0','0-0','9','7',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[564024,8,-1,'2012-01-21 22:30',136,139,'2-0','1-0','15','11',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[564025,8,-1,'2012-01-21 22:30',151,155,'3-1','1-0','4','8',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[564026,8,-1,'2012-01-21 22:30',149,490,'1-0','0-0','12','10',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564027,8,-1,'2012-01-21 22:30',172,1135,'1-0','0-0','18','17',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[564020,8,-1,'2012-01-22 01:30',175,132,'0-0','0-0','16','5',-0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[564022,8,-1,'2012-01-22 22:30',160,99,'1-5','0-2','14','4',-0.5,-0.25,'2.5','1',1,1,1,1,0,0,''],[564023,8,-1,'2012-01-23 00:30',165,162,'3-2','2-0','6','15',0.75,0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_19"] = [[564034,8,-1,'2012-01-28 03:30',169,136,'1-0','1-0','7','12',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[564036,8,-1,'2012-01-28 22:30',1135,175,'2-2','1-1','18','16',0.25,0,'2.5','1',1,1,1,1,0,1,''],[564031,8,-1,'2012-01-28 22:30',88,149,'2-0','0-0','1','9',1.75,0.75,'3/3.5','1.5',1,1,1,1,0,0,''],[564032,8,-1,'2012-01-28 22:30',139,160,'1-2','0-2','13','14',0.25,0,'2.5','1',1,1,1,1,0,0,''],[564033,8,-1,'2012-01-28 22:30',99,1078,'3-1','2-0','2','8',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564028,8,-1,'2012-01-28 22:30',132,165,'1-1','1-0','5','6',0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564030,8,-1,'2012-01-29 01:30',490,151,'1-4','1-0','11','3',-0.25,-0.25,'2.5/3','1/1.5',1,1,1,1,1,0,''],[564035,8,-1,'2012-01-29 22:30',162,172,'3-1','3-0','15','17',0.75,0.25,'2.5','1',1,1,1,1,0,1,''],[564029,8,-1,'2012-01-30 00:30',155,128,'0-3','0-1','10','4',0.25,0,'2.5','1',1,1,1,1,0,0,'']];
jh["R_20"] = [[564038,8,-1,'2012-02-04 03:30',136,99,'0-2','0-0','13','2',-0.75,-0.25,'2.5/3','1',1,1,1,1,0,0,''],[564039,8,-1,'2012-02-04 22:30',1078,1135,'2-2','1-1','8','17',1,0.25,'2.5','1',1,1,1,1,0,0,''],[564042,8,-1,'2012-02-04 22:30',165,155,'2-2','1-1','6','10',0.5,0.25,'2.5/3','1',1,1,1,1,1,1,''],[564044,8,-1,'2012-02-04 22:30',139,169,'0-1','0-0','15','7',0.25,0,'2.5','1',1,1,1,1,1,0,''],[564045,8,-1,'2012-02-04 22:30',151,162,'1-1','0-1','3','12',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[564037,8,-1,'2012-02-04 22:30',149,128,'0-0','0-0','9','4',0,0,'2.5/3','1',1,1,1,1,0,0,''],[564041,8,-1,'2012-02-05 01:30',160,88,'1-1','1-0','11','1',-1,-0.25,'3','1/1.5',1,1,1,1,0,0,''],[564043,8,-1,'2012-02-05 22:30',172,132,'2-2','1-1','18','6',-0.25,0,'3','1/1.5',1,1,1,1,0,0,''],[564040,8,-1,'2012-02-06 00:30',175,490,'0-1','0-0','16','13',0.25,0.25,'2.5','1',1,1,1,1,1,0,'']];
jh["R_21"] = [[564053,8,-1,'2012-02-11 03:30',149,172,'3-2','2-2','10','18',1,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564046,8,-1,'2012-02-11 22:30',88,175,'2-0','2-0','2','16',2.25,1,'3.5','1.5',1,1,1,1,0,0,''],[564047,8,-1,'2012-02-11 22:30',132,1078,'1-1','0-1','5','9',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564048,8,-1,'2012-02-11 22:30',99,165,'1-0','1-0','1','6',1,0.5,'2.5/3','1',1,1,1,1,0,0,''],[564049,8,-1,'2012-02-11 22:30',155,139,'5-0','4-0','11','15',0.5,0.25,'2.5/3','1',1,1,1,1,0,1,''],[564052,8,-1,'2012-02-11 22:30',162,169,'1-1','1-0','13','7',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[564050,8,-1,'2012-02-12 01:30',128,151,'3-0','3-0','4','3',0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[564054,8,-1,'2012-02-12 22:30',1135,136,'0-0','0-0','17','14',0,0,'2.5','1',1,1,1,1,0,0,''],[564051,8,-1,'2012-02-13 00:30',490,160,'0-1','0-0','11','13',0,0,'2.5/3','1',1,1,1,1,0,0,'']];
jh["R_22"] = [[564060,8,-1,'2012-02-18 03:30',1078,162,'1-1','1-1','11','13',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[564061,8,-1,'2012-02-18 22:30',165,1135,'4-1','1-0','6','17',1.25,0.5,'2.5/3','1',1,1,1,1,0,0,''],[564063,8,-1,'2012-02-18 22:30',160,132,'1-3','0-2','10','5',0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[564057,8,-1,'2012-02-18 22:30',175,128,'1-2','0-2','16','3',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[564059,8,-1,'2012-02-18 22:30',139,99,'0-1','0-0','15','1',-0.75,-0.25,'2.5/3','1',1,1,1,1,0,0,''],[564055,8,-1,'2012-02-18 22:30',136,490,'2-1','1-0','14','12',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[564062,8,-1,'2012-02-19 01:30',172,88,'0-0','0-0','18','2',-1.25,-0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564056,8,-1,'2012-02-19 22:30',151,149,'4-0','2-0','4','8',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564058,8,-1,'2012-02-20 00:30',169,155,'4-2','2-0','7','9',0.25,0,'2.5','1',1,1,1,1,0,0,'']];
jh["R_23"] = [[564072,8,-1,'2012-02-25 03:30',128,160,'1-1','1-0','2','11',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[564065,8,-1,'2012-02-25 22:30',155,172,'4-1','2-1','10','18',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564066,8,-1,'2012-02-25 22:30',162,175,'4-0','3-0','13','16',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[564067,8,-1,'2012-02-25 22:30',149,1078,'1-2','0-1','9','11',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[564068,8,-1,'2012-02-25 22:30',490,165,'0-2','0-1','14','6',-0.25,-0.25,'2.5/3','1',1,1,1,1,0,0,''],[564069,8,-1,'2012-02-25 22:30',1135,139,'3-0','0-0','17','15',0,0,'2.5','1',1,1,1,1,0,0,''],[564064,8,-1,'2012-02-26 01:30',132,136,'0-1','0-0','5','12',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[564070,8,-1,'2012-02-26 22:30',88,151,'2-0','1-0','3','4',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564071,8,-1,'2012-02-27 00:30',99,169,'3-1','1-0','1','7',1.75,0.75,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_24"] = [[564074,8,-1,'2012-03-03 22:30',160,155,'0-4','0-2','12','8',0.25,0.25,'2.5/3','1',1,1,1,1,1,0,''],[564076,8,-1,'2012-03-03 22:30',175,149,'0-0','0-0','17','13',0.25,0,'2.5','1',1,1,1,1,0,0,''],[564078,8,-1,'2012-03-03 22:30',165,88,'2-0','0-0','5','2',-0.5,-0.25,'2.5/3','1',1,1,1,1,0,0,''],[564079,8,-1,'2012-03-03 22:30',169,1135,'2-2','1-1','7','15',0.75,0.25,'2/2.5','1',1,1,1,1,0,0,''],[564080,8,-1,'2012-03-03 22:30',139,132,'1-0','0-0','16','6',0,0,'2.5/3','1',1,1,1,1,0,0,''],[564081,8,-1,'2012-03-03 22:30',172,151,'2-1','1-0','18','4',-0.5,-0.25,'2.5/3','1/1.5',1,1,1,1,0,1,''],[564073,8,-1,'2012-03-04 01:30',99,162,'2-1','1-0','1','11',1.5,0.75,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564077,8,-1,'2012-03-04 22:30',136,128,'1-0','0-0','10','3',-0.25,0,'2/2.5','1',1,1,1,1,0,0,''],[564075,8,-1,'2012-03-05 00:30',1078,490,'1-1','1-0','9','14',0.75,0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_25"] = [[564088,8,-1,'2012-03-10 03:30',155,175,'0-0','0-0','8','18',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564089,8,-1,'2012-03-10 22:30',88,1078,'7-1','5-0','2','10',1.75,0.75,'3','1/1.5',1,1,1,1,0,0,''],[564084,8,-1,'2012-03-10 22:30',162,136,'2-1','2-0','12','9',0.75,0.25,'2.5','1',1,1,1,1,1,0,''],[564085,8,-1,'2012-03-10 22:30',149,165,'3-2','2-1','11','5',0,0,'2.5/3','1',1,1,1,1,0,0,''],[564086,8,-1,'2012-03-10 22:30',128,172,'0-0','0-0','3','17',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564087,8,-1,'2012-03-10 22:30',490,139,'1-0','1-0','14','15',0.25,0,'2.5','1',1,1,1,1,2,1,''],[564090,8,-1,'2012-03-11 01:30',1135,99,'0-0','0-0','16','1',-1.25,-0.5,'3','1/1.5',1,1,1,1,0,0,''],[564083,8,-1,'2012-03-11 22:30',132,169,'3-0','1-0','6','7',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[564082,8,-1,'2012-03-12 00:30',151,160,'3-1','3-1','4','14',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_26"] = [[564098,8,-1,'2012-03-17 03:30',1078,155,'1-2','0-2','12','8',0.25,0,'2.5','1',1,1,1,1,0,0,''],[564093,8,-1,'2012-03-17 22:30',99,132,'1-0','1-0','1','6',1.25,0.5,'3','1/1.5',1,1,1,1,0,0,''],[564095,8,-1,'2012-03-17 22:30',1135,162,'2-1','1-1','15','11',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[564096,8,-1,'2012-03-17 22:30',136,149,'1-3','1-2','9','10',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[564097,8,-1,'2012-03-17 22:30',160,172,'1-3','0-2','14','17',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[564091,8,-1,'2012-03-17 22:30',165,128,'1-2','0-1','5','3',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[564094,8,-1,'2012-03-18 01:30',139,88,'0-6','0-3','16','2',-1,-0.5,'2.5/3','1',1,1,1,1,0,0,''],[564092,8,-1,'2012-03-18 22:30',175,151,'1-4','1-2','18','4',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[564099,8,-1,'2012-03-19 00:30',169,490,'4-1','1-1','8','13',1,0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_27"] = [[564104,8,-1,'2012-03-24 03:30',149,160,'2-1','0-0','9','14',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[564105,8,-1,'2012-03-24 22:30',128,1078,'1-2','1-0','3','12',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[564106,8,-1,'2012-03-24 22:30',88,169,'2-1','1-0','2','7',1.75,0.75,'3','1/1.5',1,1,1,1,0,0,''],[564108,8,-1,'2012-03-24 22:30',172,175,'2-0','2-0','16','18',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[564101,8,-1,'2012-03-24 22:30',162,139,'1-3','0-1','11','17',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[564103,8,-1,'2012-03-24 22:30',132,1135,'1-1','0-0','6','15',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[564102,8,-1,'2012-03-25 01:30',151,165,'2-0','1-0','4','5',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[564107,8,-1,'2012-03-25 21:30',155,136,'1-0','0-0','9','11',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[564100,8,-1,'2012-03-25 23:40',490,99,'1-6','1-1','13','1',-1.25,-0.5,'3','1/1.5',1,1,1,1,0,0,'']];
jh["R_28"] = [[564114,8,-1,'2012-03-31 02:30',99,155,'4-4','1-0','1','7',1.5,0.75,'3','1/1.5',1,1,1,1,0,0,''],[564115,8,-1,'2012-03-31 21:30',175,160,'0-1','0-1','18','16',0,0,'2/2.5','1',1,1,1,1,0,0,''],[564116,8,-1,'2012-03-31 21:30',132,162,'0-3','0-1','7','12',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[564117,8,-1,'2012-03-31 21:30',165,172,'0-2','0-1','6','13',1,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564112,8,-1,'2012-03-31 21:30',1135,490,'2-1','2-1','15','14',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[564110,8,-1,'2012-03-31 21:30',136,88,'0-1','0-0','11','2',-1.5,-0.5,'3','1/1.5',1,1,1,1,0,0,''],[564109,8,-1,'2012-04-01 00:30',139,149,'1-4','1-2','17','9',0,0,'2.5','1',1,1,1,1,0,0,''],[564111,8,-1,'2012-04-01 21:30',169,128,'2-1','0-0','9','4',0,0,'2.5','1',1,1,1,1,0,0,''],[564113,8,-1,'2012-04-01 23:30',1078,151,'1-1','1-0','11','3',0,0,'2.5','1',1,1,1,1,0,0,'']];
jh["R_29"] = [[564123,8,-1,'2012-04-07 21:30',155,162,'4-1','1-1','6','11',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[564125,8,-1,'2012-04-07 21:30',490,132,'1-1','1-1','16','8',0,0,'2.5/3','1',1,1,1,1,0,0,''],[564118,8,-1,'2012-04-07 21:30',175,1078,'1-2','0-1','18','10',0,0,'2.5','1',1,1,1,1,0,0,''],[564119,8,-1,'2012-04-07 21:30',88,1135,'2-1','1-1','2','14',2.25,1,'3.5','1.5',1,1,1,1,0,0,''],[564120,8,-1,'2012-04-07 21:30',149,99,'1-3','0-1','9','1',-0.75,-0.25,'2.5/3','1',1,1,1,1,1,0,''],[564121,8,-1,'2012-04-07 21:30',172,136,'2-2','0-2','13','12',0.25,0,'2.5','1',1,1,1,1,0,0,''],[564122,8,-1,'2012-04-08 00:30',128,139,'0-0','0-0','4','17',1,0.25,'2.5','1',1,1,1,1,0,0,''],[564126,8,-1,'2012-04-08 21:30',151,169,'3-0','1-0','3','5',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564124,8,-1,'2012-04-08 23:30',160,165,'1-1','1-0','15','7',0,0,'2.5/3','1',1,1,1,1,0,0,'']];
jh["R_30"] = [[564127,8,-1,'2012-04-11 02:00',1135,155,'1-3','1-2','15','5',0,0,'2.5','1',1,1,1,1,0,0,''],[564128,8,-1,'2012-04-11 02:00',162,490,'4-0','3-0','11','16',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[564135,8,-1,'2012-04-11 02:00',139,172,'1-2','0-1','17','13',0.25,0,'2.5','1',1,1,1,1,0,0,''],[564131,8,-1,'2012-04-11 02:00',132,128,'2-2','1-0','7','4',0,0,'2.5','1',1,1,1,1,1,0,''],[564132,8,-1,'2012-04-12 02:00',136,151,'4-1','3-0','12','3',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[564133,8,-1,'2012-04-12 02:00',1078,160,'4-0','2-0','10','14',0.25,0.25,'2.5/3','1',1,1,1,1,0,0,''],[564134,8,-1,'2012-04-12 02:00',165,175,'3-1','1-1','6','18',1,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564129,8,-1,'2012-04-12 02:00',169,149,'2-0','1-0','8','9',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564130,8,-1,'2012-04-12 02:00',99,88,'1-0','0-0','1','2',0,0,'2.5/3','1',1,1,1,1,0,0,'']];
jh["R_31"] = [[564144,8,-1,'2012-04-14 02:30',155,132,'4-1','2-1','5','8',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564140,8,-1,'2012-04-14 21:30',149,1135,'1-2','1-1','10','15',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564141,8,-1,'2012-04-14 21:30',160,169,'1-0','1-0','14','7',0,0,'2.5','1',1,1,1,1,0,0,''],[564142,8,-1,'2012-04-14 21:30',151,99,'1-2','1-1','3','1',-0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564143,8,-1,'2012-04-14 21:30',165,139,'3-3','1-0','6','17',1,0.25,'2.5/3','1/1.5',1,1,1,1,0,1,''],[564136,8,-1,'2012-04-14 21:30',175,136,'0-2','0-1','18','12',0,0,'2.5','1',1,1,1,1,0,0,''],[564139,8,-1,'2012-04-15 00:30',88,162,'0-0','0-0','2','11',1.5,0.75,'3','1/1.5',1,1,1,1,0,0,''],[564138,8,-1,'2012-04-15 21:30',128,490,'3-0','1-0','4','16',1,0.5,'2.5/3','1',1,1,1,1,0,0,''],[564137,8,-1,'2012-04-15 23:30',172,1078,'0-0','0-0','13','9',0.25,0,'2.5/3','1',1,1,1,1,0,0,'']];
jh["R_32"] = [[564149,8,-1,'2012-04-21 02:30',162,149,'0-0','0-0','12','10',0.5,0.25,'3','1/1.5',1,1,1,1,0,0,''],[564150,8,-1,'2012-04-21 21:30',1078,165,'0-1','0-0','9','6',0,0,'2.5','1',1,1,1,1,0,0,''],[564145,8,-1,'2012-04-21 21:30',136,160,'1-1','0-0','11','14',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[564147,8,-1,'2012-04-21 21:30',139,175,'1-2','0-2','17','18',0.75,0.25,'2.5','1',1,1,1,1,1,0,''],[564148,8,-1,'2012-04-21 21:30',490,155,'1-1','0-0','16','5',-0.5,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564153,8,-1,'2012-04-21 21:30',132,88,'1-2','0-0','8','2',-0.75,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564151,8,-1,'2012-04-22 00:30',99,128,'2-0','1-0','1','4',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564152,8,-1,'2012-04-22 21:30',1135,151,'1-1','1-1','15','3',-0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564146,8,-1,'2012-04-22 23:30',169,172,'0-0','0-0','7','13',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_33"] = [[564154,8,-1,'2012-04-28 21:30',165,169,'1-0','0-0','6','7',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564155,8,-1,'2012-04-28 21:30',160,162,'0-0','0-0','14','12',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[564156,8,-1,'2012-04-28 21:30',1078,136,'2-3','1-2','9','11',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[564157,8,-1,'2012-04-28 21:30',88,155,'2-0','1-0','2','5',1,0.5,'3','1/1.5',1,1,1,1,0,0,''],[564158,8,-1,'2012-04-28 21:30',172,490,'4-1','1-0','13','16',0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[564159,8,-1,'2012-04-28 21:30',128,1135,'0-0','0-0','4','15',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564160,8,-1,'2012-04-28 21:30',175,99,'2-5','1-3','18','1',-1,-0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564161,8,-1,'2012-04-28 21:30',149,132,'3-1','1-1','10','8',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564162,8,-1,'2012-04-28 21:30',151,139,'4-0','1-0','3','17',1,0.5,'3','1/1.5',1,1,1,1,0,0,'']];
jh["R_34"] = [[564163,8,-1,'2012-05-05 21:30',162,128,'0-3','0-1','13','4',0,0,'2.5/3','1',1,1,1,1,0,0,''],[564164,8,-1,'2012-05-05 21:30',490,88,'1-4','0-1','16','2',-0.75,-0.25,'3','1/1.5',1,1,1,1,0,0,''],[564165,8,-1,'2012-05-05 21:30',132,151,'2-3','1-1','9','3',0,0,'3','1/1.5',1,1,1,1,0,0,''],[564166,8,-1,'2012-05-05 21:30',136,165,'1-4','0-2','10','5',0,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564167,8,-1,'2012-05-05 21:30',1135,160,'1-0','1-0','15','14',0,0,'2.5/3','1',1,1,1,1,0,0,''],[564168,8,-1,'2012-05-05 21:30',155,149,'3-2','0-1','6','8',0.25,0.25,'3','1/1.5',1,1,1,1,0,0,''],[564169,8,-1,'2012-05-05 21:30',99,172,'4-0','4-0','1','12',1.25,0.5,'3','1/1.5',1,1,1,1,0,0,''],[564170,8,-1,'2012-05-05 21:30',169,175,'2-1','1-1','7','18',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[564171,8,-1,'2012-05-05 21:30',139,1078,'3-1','1-0','17','11',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,1,'']];
var scoreColor = ['#FF9966|欧冠杯小组赛资格|歐冠盃小組賽資格|UEFA CL qualifying','#a2e76f|欧冠杯附加|歐冠盃附加|UEFA CL play-offs','#00CCFF|欧罗巴联赛杯资格|歐霸盃資格|UEFA EL qualifying','#51AB8D|升降级附加|升降級附加|Promotion Play-Offs','#B1A7A7|降级球队|降級球隊|Degrade Team'];
var totalScore = [[0,1,99,2,34,25,6,3,80,25,55,'73.5','17.6','8.8',2.35,0.74,81,0,'',0,0,0,0,0,0,''],[0,2,88,3,34,23,4,7,77,22,55,'67.6','11.8','20.6',2.26,0.65,73,0,'',0,2,1,0,0,0,''],[0,3,151,2,34,20,4,10,74,44,30,'58.8','11.8','29.4',2.18,1.29,64,0,'',0,2,2,1,0,0,''],[1,4,128,1,34,17,9,8,49,24,25,'50.0','26.5','23.5',1.44,0.71,60,0,'',1,1,0,2,1,0,''],[2,5,165,4,34,15,9,10,52,44,8,'44.1','26.5','29.4',1.53,1.29,54,0,'',1,0,1,0,0,0,''],[2,6,155,3,34,15,8,11,63,46,17,'44.1','23.5','32.4',1.85,1.35,53,0,'',0,0,0,1,2,0,''],[-1,7,169,3,34,12,12,10,41,45,-4,'35.3','35.3','29.4',1.21,1.32,48,0,'',2,0,2,1,2,0,''],[-1,8,149,4,34,13,5,16,47,60,-13,'38.2','14.7','47.1',1.38,1.76,44,0,'',2,2,2,1,0,2,''],[-1,9,132,5,34,11,9,14,49,58,-9,'32.4','26.5','41.2',1.44,1.71,42,0,'',1,1,2,2,2,2,''],[-1,10,136,2,34,12,6,16,38,49,-11,'35.3','17.6','47.1',1.12,1.44,42,0,'',1,0,0,1,0,2,''],[-1,11,1078,3,34,10,11,13,41,47,-6,'29.4','32.4','38.2',1.21,1.38,41,0,'',0,0,1,2,2,2,''],[-1,12,172,1,34,10,10,14,45,61,-16,'29.4','29.4','41.2',1.32,1.79,40,0,'',1,0,1,1,0,2,''],[-1,13,162,2,34,9,12,13,47,51,-4,'26.5','35.3','38.2',1.38,1.50,39,0,'',2,0,1,1,1,2,''],[-1,14,1135,2,34,8,14,12,36,49,-13,'23.5','41.2','35.3',1.06,1.44,38,0,'',2,2,0,1,1,0,''],[-1,15,160,2,34,8,12,14,35,57,-22,'23.5','35.3','41.2',1.03,1.68,36,0,'',1,2,0,1,1,2,''],[3,16,139,8,34,7,10,17,38,64,-26,'20.6','29.4','50.0',1.12,1.88,31,0,'',1,2,1,2,2,0,''],[4,17,490,6,34,8,6,20,39,75,-36,'23.5','17.6','58.8',1.15,2.21,30,0,'',1,2,2,1,2,2,''],[4,18,175,5,34,4,11,19,24,54,-30,'11.8','32.4','55.9',0.71,1.59,23,0,'',2,2,2,0,2,2,'']];
var homeScore = [[1,99,17,14,2,1,44,12,32,'82.4','11.8','5.9',2.59,0.71,44],[2,88,17,14,1,2,49,6,43,'82.4','5.9','11.8',2.88,0.35,43],[3,151,17,13,1,3,47,14,33,'76.5','5.9','17.6',2.76,0.82,40],[4,169,17,10,7,0,31,17,14,'58.8','41.2','0.0',1.82,1.00,37],[5,128,17,9,7,1,29,10,19,'52.9','41.2','5.9',1.71,0.59,34],[6,155,17,10,3,4,36,17,19,'58.8','17.6','23.5',2.12,1.00,33],[7,149,17,10,2,5,29,22,7,'58.8','11.8','29.4',1.71,1.29,32],[8,132,17,8,4,5,31,23,8,'47.1','23.5','29.4',1.82,1.35,28],[9,165,17,8,4,5,28,24,4,'47.1','23.5','29.4',1.65,1.41,28],[10,1135,17,6,7,4,20,19,1,'35.3','41.2','23.5',1.18,1.12,25],[11,172,17,6,6,5,24,20,4,'35.3','35.3','29.4',1.41,1.18,24],[12,162,17,7,3,7,27,26,1,'41.2','17.6','41.2',1.59,1.53,24],[13,136,17,6,4,7,22,25,-3,'35.3','23.5','41.2',1.29,1.47,22],[14,1078,17,4,9,4,21,17,4,'23.5','52.9','23.5',1.24,1.00,21],[15,490,17,5,4,8,20,29,-9,'29.4','23.5','47.1',1.18,1.71,19],[16,160,17,3,7,7,19,29,-10,'17.6','41.2','41.2',1.12,1.71,16],[17,139,17,4,3,10,19,29,-10,'23.5','17.6','58.8',1.12,1.71,15],[18,175,17,2,5,10,12,28,-16,'11.8','29.4','58.8',0.71,1.65,11]];
var guestScore = [[1,99,17,11,4,2,36,13,23,'64.7','23.5','11.8',2.12,0.76,37],[2,88,17,9,3,5,28,16,12,'52.9','17.6','29.4',1.65,0.94,30],[3,128,17,8,2,7,20,14,6,'47.1','11.8','41.2',1.18,0.82,26],[4,165,17,7,5,5,24,20,4,'41.2','29.4','29.4',1.41,1.18,26],[5,151,17,7,3,7,27,30,-3,'41.2','17.6','41.2',1.59,1.76,24],[6,155,17,5,5,7,27,29,-2,'29.4','29.4','41.2',1.59,1.71,20],[7,136,17,6,2,9,16,24,-8,'35.3','11.8','52.9',0.94,1.41,20],[8,1078,17,6,2,9,20,30,-10,'35.3','11.8','52.9',1.18,1.76,20],[9,160,17,5,5,7,16,28,-12,'29.4','29.4','41.2',0.94,1.65,20],[10,139,17,3,7,7,19,35,-16,'17.6','41.2','41.2',1.12,2.06,16],[11,172,17,4,4,9,21,41,-20,'23.5','23.5','52.9',1.24,2.41,16],[12,162,17,2,9,6,20,25,-5,'11.8','52.9','35.3',1.18,1.47,15],[13,132,17,3,5,9,18,35,-17,'17.6','29.4','52.9',1.06,2.06,14],[14,1135,17,2,7,8,16,30,-14,'11.8','41.2','47.1',0.94,1.76,13],[15,175,17,2,6,9,12,26,-14,'11.8','35.3','52.9',0.71,1.53,12],[16,149,17,3,3,11,18,38,-20,'17.6','17.6','64.7',1.06,2.24,12],[17,169,17,2,5,10,10,28,-18,'11.8','29.4','58.8',0.59,1.65,11],[18,490,17,3,2,12,19,46,-27,'17.6','11.8','70.6',1.12,2.71,11]];
var halfScore = [[1,99,34,20,12,2,36,7,29,'58.8','35.3','5.9',1.06,0.21,72],[2,88,34,16,14,4,35,7,28,'47.1','41.2','11.8',1.03,0.21,62],[3,128,34,13,16,5,24,8,16,'38.2','47.1','14.7',0.71,0.24,55],[4,1078,34,14,9,11,22,22,0,'41.2','26.5','32.4',0.65,0.65,51],[5,155,34,12,14,8,25,17,8,'35.3','41.2','23.5',0.74,0.50,50],[6,162,34,11,16,7,27,18,9,'32.4','47.1','20.6',0.79,0.53,49],[7,165,34,12,10,12,20,20,0,'35.3','29.4','35.3',0.59,0.59,46],[8,151,34,12,10,12,27,28,-1,'35.3','29.4','35.3',0.79,0.82,46],[9,169,34,10,15,9,21,18,3,'29.4','44.1','26.5',0.62,0.53,45],[10,136,34,10,13,11,20,23,-3,'29.4','38.2','32.4',0.59,0.68,43],[11,149,34,9,14,11,21,28,-7,'26.5','41.2','32.4',0.62,0.82,41],[12,132,34,7,17,10,19,24,-5,'20.6','50.0','29.4',0.56,0.71,38],[13,490,34,8,12,14,19,30,-11,'23.5','35.3','41.2',0.56,0.88,36],[14,172,34,8,12,14,19,31,-12,'23.5','35.3','41.2',0.56,0.91,36],[15,160,34,8,12,14,14,28,-14,'23.5','35.3','41.2',0.41,0.82,36],[16,1135,34,4,21,9,14,22,-8,'11.8','61.8','26.5',0.41,0.65,33],[17,139,34,6,13,15,17,32,-15,'17.6','38.2','44.1',0.50,0.94,31],[18,175,34,3,16,15,12,29,-17,'8.8','47.1','44.1',0.35,0.85,25]];
var homeHalfScore = [[1,99,17,14,3,0,23,0,23,'82.4','17.6','0.0',1.35,0.00,45],[2,88,17,11,6,0,26,1,25,'64.7','35.3','0.0',1.53,0.06,39],[3,151,17,10,4,3,18,7,11,'58.8','23.5','17.6',1.06,0.41,34],[4,162,17,9,5,3,18,5,13,'52.9','29.4','17.6',1.06,0.29,32],[5,128,17,8,7,2,16,4,12,'47.1','41.2','11.8',0.94,0.24,31],[6,169,17,7,10,0,15,7,8,'41.2','58.8','0.0',0.88,0.41,31],[7,1078,17,8,7,2,14,7,7,'47.1','41.2','11.8',0.82,0.41,31],[8,155,17,8,6,3,17,9,8,'47.1','35.3','17.6',1.00,0.53,30],[9,165,17,6,7,4,10,8,2,'35.3','41.2','23.5',0.59,0.47,25],[10,490,17,6,6,5,11,10,1,'35.3','35.3','29.4',0.65,0.59,24],[11,132,17,5,8,4,9,8,1,'29.4','47.1','23.5',0.53,0.47,23],[12,149,17,4,10,3,13,11,2,'23.5','58.8','17.6',0.76,0.65,22],[13,136,17,5,7,5,11,11,0,'29.4','41.2','29.4',0.65,0.65,22],[14,160,17,5,6,6,8,13,-5,'29.4','35.3','35.3',0.47,0.76,21],[15,172,17,5,5,7,9,11,-2,'29.4','29.4','41.2',0.53,0.65,20],[16,1135,17,2,11,4,8,11,-3,'11.8','64.7','23.5',0.47,0.65,17],[17,139,17,3,7,7,9,15,-6,'17.6','41.2','41.2',0.53,0.88,16],[18,175,17,0,8,9,4,15,-11,'0.0','47.1','52.9',0.24,0.88,8]];
var guestHalfScore = [[1,99,17,6,9,2,13,7,6,'35.3','52.9','11.8',0.76,0.41,27],[2,128,17,5,9,3,8,4,4,'29.4','52.9','17.6',0.47,0.24,24],[3,88,17,5,8,4,9,6,3,'29.4','47.1','23.5',0.53,0.35,23],[4,165,17,6,3,8,10,12,-2,'35.3','17.6','47.1',0.59,0.71,21],[5,136,17,5,6,6,9,12,-3,'29.4','35.3','35.3',0.53,0.71,21],[6,155,17,4,8,5,8,8,0,'23.5','47.1','29.4',0.47,0.47,20],[7,1078,17,6,2,9,8,15,-7,'35.3','11.8','52.9',0.47,0.88,20],[8,149,17,5,4,8,8,17,-9,'29.4','23.5','47.1',0.47,1.00,19],[9,162,17,2,11,4,9,13,-4,'11.8','64.7','23.5',0.53,0.76,17],[10,175,17,3,8,6,8,14,-6,'17.6','47.1','35.3',0.47,0.82,17],[11,1135,17,2,10,5,6,11,-5,'11.8','58.8','29.4',0.35,0.65,16],[12,172,17,3,7,7,10,20,-10,'17.6','41.2','41.2',0.59,1.18,16],[13,132,17,2,9,6,10,16,-6,'11.8','52.9','35.3',0.59,0.94,15],[14,139,17,3,6,8,8,17,-9,'17.6','35.3','47.1',0.47,1.00,15],[15,160,17,3,6,8,6,15,-9,'17.6','35.3','47.1',0.35,0.88,15],[16,169,17,3,5,9,6,11,-5,'17.6','29.4','52.9',0.35,0.65,14],[17,151,17,2,6,9,9,21,-12,'11.8','35.3','52.9',0.53,1.24,12],[18,490,17,2,6,9,8,20,-12,'11.8','35.3','52.9',0.47,1.18,12]];
var lastUpdateTime = '2014-01-26 14:22:38';
