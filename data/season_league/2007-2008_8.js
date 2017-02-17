﻿var arrLeague = [8,'德国甲组联赛','德國甲組聯賽','German Bundesliga','2007-2008','#990099','league_match/images/20130119152241.jpg',34,34,'德甲','德甲','GER D1','　　09/10赛季德国足球甲级联赛共由18支球队组成，采取双循环赛制（每支球队分别以主、客场身份和其他球队交锋两次）。单场比赛积分计算方法是胜者得3分、负者得0分、平局则双方各得1分，赛季末按累计积分高低排名，同分则依次按照淨胜球、进球数的多少来决定名次。&nbsp;<br/>　　联赛前两名直接参加10/11赛季冠军联赛小组赛，第三名取得参加10/11赛季冠军联赛外围赛的资格，四、五名参加10/11赛季欧霸杯联赛（德国盃冠军也可以参加欧霸杯联赛，而如果德国盃冠军已经取得欧战资格，则其名额将让给德国盃亚军）。联赛排名最后2名的球队直接降到乙级联赛，而倒数第三名则与乙级联赛第三名进行主客场两回合的升降级附加赛。'];
var arrTeam = [[160,'汉堡','漢堡','Hamburger SV','漢堡','images/2013119151640.jpg'],[423,'法兰克福','法蘭克福','Eintracht Frankfurt','法蘭克福','images/201312094508.jpg'],[173,'罗斯托克','羅斯托克','Hansa Rostock','羅斯托克','images/2013120105631.jpg'],[155,'斯图加特','史特加','VfB Stuttgart','史特加','images/2013119145440.jpg'],[132,'云达不来梅','雲達不萊梅','Werder Bremen','雲達不萊梅','images/2013119144220.jpg'],[427,'科特布斯','科特布斯','Energie Cottbus','科特布斯','images/2013120100634.jpg'],[149,'沃尔夫斯堡','沃爾夫斯堡','VfL Wolfsburg','沃爾夫斯堡','images/2013119145123.jpg'],[90,'比勒菲尔德','比勒費爾德','Arminia Bielefeld','比勒費爾德','images/2013120105410.jpg'],[99,'多特蒙德','多蒙特','Borussia Dortmund','多蒙特','images/2013119144655.jpg'],[139,'柏林赫塔','哈化柏林','Hertha Berlin','哈化柏林','images/201312095315.jpg'],[88,'拜仁慕尼黑','拜仁慕尼黑','Bayern Munchen','拜仁慕尼黑','images/2013117153233.jpg'],[487,'卡尔斯鲁厄','卡斯魯厄','Karlsruher SC','卡斯魯厄','images/2013120111953.jpg'],[493,'杜伊斯堡','杜伊斯堡','MSV Duisburg','杜伊斯堡','images/2013119131627.jpg'],[136,'纽伦堡','紐倫堡','Nurnberg','紐倫堡','images/2013119145001.jpg'],[151,'沙尔克04','史浩克零四','Schalke 04','史浩克零四','images/2013119145317.jpg'],[169,'汉诺威96','漢諾威','Hannover 96','漢諾威','images/201312092606.jpg'],[95,'波鸿','波琴','VfL Bochum','波琴','images/201312095141.jpg'],[165,'勒沃库森','利華古遜','Bayer Leverkusen','利華古遜','images/2013117153453.jpg']];
jh["R_1"] = [[141635,8,-1,'2007-08-11 02:30',155,151,'2-2','0-1','2','1',0.25,,'','',1,1,1,1,0,0,''],[141636,8,-1,'2007-08-11 21:30',88,173,'3-0','1-0','1','14',2,0.75,'3','1/1.5',1,1,1,1,0,0,''],[141637,8,-1,'2007-08-11 21:30',95,132,'2-2','0-2','7','8',-0.5,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141639,8,-1,'2007-08-11 21:30',423,139,'1-0','1-0','4','12',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141640,8,-1,'2007-08-11 21:30',169,160,'0-1','0-1','11','3',0,0,'2.5','1',1,1,1,1,0,0,''],[141641,8,-1,'2007-08-11 21:30',165,427,'0-0','0-0','9','10',1,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141643,8,-1,'2007-08-11 21:30',149,90,'1-3','0-1','13','2',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141642,8,-1,'2007-08-12 23:00',136,487,'0-2','0-1','','',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141638,8,-1,'2007-08-12 23:00',99,493,'1-3','0-1','','',1.25,,'','',1,1,1,1,0,0,'']];
jh["R_2"] = [[141650,8,-1,'2007-08-18 02:30',487,169,'1-2','1-0','4','13',-0.25,0,'2','1',1,1,1,1,0,0,''],[141651,8,-1,'2007-08-18 21:30',151,99,'4-1','2-0','7','16',0.5,,'3.5','',1,1,1,1,0,1,''],[141652,8,-1,'2007-08-18 21:30',132,88,'0-4','0-1','10','1',-0.5,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141644,8,-1,'2007-08-18 21:30',90,423,'2-2','0-0','2','6',0,,'','',1,1,1,1,0,0,''],[141646,8,-1,'2007-08-18 21:30',493,149,'1-3','0-1','3','15',0,0,'2.5','1',1,1,1,1,0,0,''],[141648,8,-1,'2007-08-18 21:30',173,136,'1-2','0-2','18','17',-0.25,,'','',1,1,1,1,0,0,''],[141649,8,-1,'2007-08-18 21:30',139,155,'3-1','0-1','14','8',-0.25,,'','',1,1,1,1,0,0,''],[141647,8,-1,'2007-08-19 23:00',160,165,'1-0','0-0','5','12',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[141645,8,-1,'2007-08-19 23:00',427,95,'1-2','0-2','11','9',0,0,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_3"] = [[141655,8,-1,'2007-08-25 02:30',95,160,'2-1','1-0','5','2',-0.25,0,'2.5','1',1,1,1,1,0,1,''],[141656,8,-1,'2007-08-25 21:30',99,427,'3-0','1-0','18','13',0.5,,'','',1,1,1,1,0,0,''],[141658,8,-1,'2007-08-25 21:30',165,487,'3-0','3-0','14','8',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141659,8,-1,'2007-08-25 21:30',136,132,'0-1','0-0','12','16',0,0,'2.5/3','1',1,1,1,1,0,0,''],[141660,8,-1,'2007-08-25 21:30',155,493,'1-0','1-0','15','9',0.5,,'','',1,1,1,1,0,1,''],[141653,8,-1,'2007-08-25 21:30',88,169,'3-0','1-0','1','11',1.25,,'','',1,1,1,1,0,1,''],[141654,8,-1,'2007-08-25 21:30',90,139,'2-0','0-0','4','7',0,,'','',1,1,1,1,0,0,''],[141661,8,-1,'2007-08-26 23:00',149,151,'1-1','1-0','10','3',-0.25,0,'2.5','1',1,1,1,1,1,0,''],[141657,8,-1,'2007-08-26 23:00',423,173,'1-0','1-0','6','17',0.75,0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_4"] = [[141669,8,-1,'2007-09-01 02:30',151,165,'1-1','1-0','6','7',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141670,8,-1,'2007-09-01 21:30',132,423,'2-1','1-0','5','10',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141665,8,-1,'2007-09-01 21:30',169,95,'3-2','2-1','16','7',0.25,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141666,8,-1,'2007-09-01 21:30',173,99,'0-1','0-0','18','6',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[141667,8,-1,'2007-09-01 21:30',139,149,'2-1','1-0','14','11',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[141662,8,-1,'2007-09-01 21:30',427,136,'1-1','1-0','17','13',-0.25,0,'2.5','1',1,1,1,1,0,1,''],[141663,8,-1,'2007-09-01 21:30',493,90,'3-0','0-0','12','2',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141664,8,-1,'2007-09-02 23:00',160,88,'1-1','0-0','5','1',-0.5,-0.25,'2.5','1',1,1,1,1,0,0,''],[141668,8,-1,'2007-09-02 23:00',487,155,'1-0','0-0','14','9',-0.25,-0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_5"] = [[141673,8,-1,'2007-09-15 02:30',99,132,'3-0','3-0','10','6',0,0,'2.5/3','1',1,1,1,1,0,1,''],[141675,8,-1,'2007-09-15 21:30',423,160,'2-1','1-0','4','5',0,0,'2.5','1',1,1,1,1,0,0,''],[141676,8,-1,'2007-09-15 21:30',165,95,'2-0','0-0','13','2',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,1,''],[141677,8,-1,'2007-09-15 21:30',136,169,'2-2','0-2','16','12',0.25,0.25,'2.5','1',1,1,1,1,0,1,''],[141678,8,-1,'2007-09-15 21:30',155,427,'3-0','0-0','15','17',1.25,0.5,'2.5/3','1',1,1,1,1,0,0,''],[141671,8,-1,'2007-09-15 21:30',88,151,'1-1','0-1','1','7',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141672,8,-1,'2007-09-15 21:30',90,173,'4-2','1-0','3','18',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[141679,8,-1,'2007-09-16 23:00',149,487,'1-2','1-0','14','11',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[141674,8,-1,'2007-09-16 23:00',493,139,'1-2','0-0','8','9',0,0,'2.5/3','1',1,1,1,1,0,0,'']];
jh["R_6"] = [[141680,8,-1,'2007-09-22 02:30',95,423,'0-0','0-0','3','5',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141681,8,-1,'2007-09-22 21:30',427,149,'1-2','1-1','17','14',0,0,'2.5','1',1,1,1,1,0,0,''],[141682,8,-1,'2007-09-22 21:30',160,136,'1-0','0-0','6','16',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[141684,8,-1,'2007-09-22 21:30',173,493,'2-0','1-0','18','9',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141685,8,-1,'2007-09-22 21:30',139,99,'3-2','1-1','10','2',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141687,8,-1,'2007-09-22 21:30',151,90,'3-0','1-0','8','2',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141688,8,-1,'2007-09-22 21:30',132,155,'4-1','3-1','7','15',0.25,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141686,8,-1,'2007-09-23 23:00',487,88,'1-4','0-2','11','1',-1,-0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141683,8,-1,'2007-09-23 23:00',169,165,'0-3','0-0','12','13',0,0,'2.5','1',1,1,1,1,0,0,'']];
jh["R_7"] = [[141691,8,-1,'2007-09-26 02:00',99,160,'0-3','0-2','9','6',0.25,0,'2.5','1',1,1,1,1,1,0,''],[141692,8,-1,'2007-09-26 02:00',493,151,'0-2','0-1','15','5',-0.75,-0.25,'2.5/3','1',1,1,1,1,0,0,''],[141694,8,-1,'2007-09-26 02:00',139,173,'1-3','1-1','2','17',1,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141697,8,-1,'2007-09-26 02:00',149,132,'1-1','0-0','12','8',-0.25,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141695,8,-1,'2007-09-27 02:00',136,165,'1-2','0-1','16','3',0,0,'2.5','1',1,1,1,1,0,0,''],[141696,8,-1,'2007-09-27 02:00',155,95,'1-0','0-0','13','11',1,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141693,8,-1,'2007-09-27 02:00',423,487,'0-1','0-0','4','10',0.75,0.25,'2.5','1',1,1,1,1,0,1,''],[141689,8,-1,'2007-09-27 02:00',88,427,'5-0','0-0','1','18',2.25,1,'3/3.5','1.5',1,1,1,1,0,0,''],[141690,8,-1,'2007-09-27 02:00',90,169,'0-2','0-0','7','14',0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_8"] = [[141705,8,-1,'2007-09-29 02:30',151,139,'1-0','1-0','3','5',1,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141706,8,-1,'2007-09-29 21:30',132,90,'8-1','4-1','8','10',1,0.5,'3','1/1.5',1,1,1,1,0,0,''],[141702,8,-1,'2007-09-29 21:30',173,155,'2-1','2-0','16','9',-0.25,-0.25,'2.5/3','1',1,1,1,1,0,0,''],[141703,8,-1,'2007-09-29 21:30',487,99,'3-1','1-1','6','12',0,0,'2.5/3','1',1,1,1,1,0,0,''],[141704,8,-1,'2007-09-29 21:30',165,88,'0-1','0-1','2','1',-0.75,-0.25,'3','1/1.5',1,1,1,1,0,0,''],[141698,8,-1,'2007-09-29 21:30',95,136,'3-3','1-1','14','17',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141700,8,-1,'2007-09-29 21:30',160,149,'2-2','1-0','4','13',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[141701,8,-1,'2007-09-30 23:00',169,493,'2-1','1-1','11','15',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[141699,8,-1,'2007-09-30 23:00',427,423,'2-2','2-0','18','7',0,0,'2.5','1',1,1,1,1,0,0,'']];
jh["R_9"] = [[141709,8,-1,'2007-10-06 02:30',99,95,'2-1','1-1','15','13',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,1,0,''],[141710,8,-1,'2007-10-06 21:30',493,132,'1-3','1-1','17','5',-0.75,-0.25,'3','1/1.5',1,1,1,1,2,0,''],[141708,8,-1,'2007-10-06 21:30',90,160,'0-1','0-0','11','6',-0.25,0,'2.5','1/1.5',1,1,1,1,0,0,''],[141712,8,-1,'2007-10-06 21:30',139,427,'0-0','0-0','9','18',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141713,8,-1,'2007-10-06 21:30',151,487,'0-2','0-0','2','3',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141714,8,-1,'2007-10-06 21:30',155,169,'0-2','0-1','10','7',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,1,0,''],[141715,8,-1,'2007-10-06 21:30',149,173,'1-0','0-0','12','14',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141707,8,-1,'2007-10-07 23:00',88,136,'3-0','2-0','1','16',1.75,0.75,'3/3.5','1.5',1,1,1,1,0,0,''],[141711,8,-1,'2007-10-07 23:00',423,165,'2-1','0-0','8','4',0,0,'2.5/3','1',1,1,1,1,0,0,'']];
jh["R_10"] = [[141717,8,-1,'2007-10-20 02:30',427,493,'1-2','0-1','18','16',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141722,8,-1,'2007-10-20 21:30',165,99,'2-2','0-1','8','11',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141723,8,-1,'2007-10-20 21:30',136,423,'5-1','1-1','17','7',0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[141724,8,-1,'2007-10-20 21:30',132,139,'3-2','0-0','3','9',1,0.5,'3/3.5','1.5',1,1,1,1,0,0,''],[141720,8,-1,'2007-10-20 21:30',173,151,'1-1','0-1','15','5',-0.5,-0.25,'2.5','1',1,1,1,1,0,0,''],[141716,8,-1,'2007-10-20 21:30',95,88,'1-2','1-1','14','1',-1.25,-0.5,'3','1/1.5',1,1,1,1,0,0,''],[141718,8,-1,'2007-10-20 21:45',160,155,'4-1','3-0','4','12',0.25,0,'2.5','1',1,1,1,1,0,1,''],[141719,8,-1,'2007-10-21 23:00',169,149,'2-2','2-2','6','10',0.25,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141721,8,-1,'2007-10-21 23:00',487,90,'0-0','0-0','2','13',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_11"] = [[141728,8,-1,'2007-10-27 02:30',423,169,'0-0','0-0','8','6',0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141729,8,-1,'2007-10-27 21:30',173,487,'0-0','0-0','13','4',0,0,'2.5','1',1,1,1,1,0,0,''],[141730,8,-1,'2007-10-27 21:30',139,95,'2-0','2-0','10','16',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141731,8,-1,'2007-10-27 21:30',151,132,'1-1','1-1','5','2',0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141732,8,-1,'2007-10-27 21:30',155,165,'1-0','0-0','14','7',0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141733,8,-1,'2007-10-27 21:30',149,136,'3-1','2-0','9','15',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[141725,8,-1,'2007-10-27 21:30',90,427,'1-1','0-0','12','18',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141726,8,-1,'2007-10-28 23:59',99,88,'0-0','0-0','11','1',-0.75,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141727,8,-1,'2007-10-28 23:59',493,160,'0-1','0-1','17','3',-0.5,-0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_12"] = [[141736,8,-1,'2007-11-03 03:35',427,151,'1-0','0-0','18','5',-0.75,-0.25,'2.5','1',1,1,1,1,0,0,''],[141737,8,-1,'2007-11-03 22:30',160,139,'2-1','1-0','2','8',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141738,8,-1,'2007-11-03 22:30',169,99,'2-1','0-0','6','11',0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[141740,8,-1,'2007-11-03 22:30',165,90,'4-0','3-0','10','13',1,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141741,8,-1,'2007-11-03 22:30',136,155,'0-1','0-1','15','12',0,0,'2.5','1',1,1,1,1,0,0,''],[141742,8,-1,'2007-11-03 22:30',132,173,'1-0','1-0','3','14',1.5,0.75,'3/3.5','1/1.5',1,1,1,1,0,0,''],[141734,8,-1,'2007-11-03 22:30',88,423,'0-0','0-0','1','9',1.75,0.75,'3/3.5','1/1.5',1,1,1,1,0,0,''],[141735,8,-1,'2007-11-04 23:59',95,149,'5-3','4-0','16','7',0,0,'2.5/3','1',1,1,1,1,0,0,''],[141739,8,-1,'2007-11-04 23:59',487,493,'1-0','1-0','4','17',0.5,0.25,'2.5','1',1,1,1,1,0,1,'']];
jh["R_13"] = [[141745,8,-1,'2007-11-10 03:30',493,95,'0-2','0-1','17','13',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141746,8,-1,'2007-11-10 22:30',173,427,'3-2','1-0','15','18',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[141747,8,-1,'2007-11-10 22:30',139,169,'1-0','0-0','10','5',0.25,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141748,8,-1,'2007-11-10 22:30',151,160,'1-1','1-1','7','2',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141749,8,-1,'2007-11-10 22:30',155,88,'3-1','3-0','11','1',-0.5,-0.25,'2.5/3','1/1.5',1,1,1,1,0,1,''],[141750,8,-1,'2007-11-10 22:30',132,487,'4-0','2-0','3','4',1,0.5,'3','1/1.5',1,1,1,1,0,0,''],[141744,8,-1,'2007-11-10 22:30',99,423,'1-1','0-0','12','8',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141751,8,-1,'2007-11-11 23:59',149,165,'1-2','0-1','9','6',0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141743,8,-1,'2007-11-11 23:59',90,136,'3-1','0-1','14','16',0,0,'2.5','1',1,1,1,1,0,0,'']];
jh["R_14"] = [[141758,8,-1,'2007-11-24 03:30',487,139,'2-1','0-1','4','8',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141759,8,-1,'2007-11-24 22:30',165,493,'4-1','0-1','5','17',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141752,8,-1,'2007-11-24 22:30',88,149,'2-1','1-0','1','11',1.75,0.75,'3','1/1.5',1,1,1,1,0,0,''],[141753,8,-1,'2007-11-24 22:30',95,90,'3-0','2-0','12','14',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141754,8,-1,'2007-11-24 22:30',427,132,'0-2','0-0','18','2',-0.75,-0.25,'3','1/1.5',1,1,1,1,0,0,''],[141755,8,-1,'2007-11-24 22:30',423,155,'1-4','1-1','10','9',0,0,'2.5','1',1,1,1,1,0,0,''],[141757,8,-1,'2007-11-24 22:30',169,151,'2-3','1-1','6','7',0,0,'2.5','1',1,1,1,1,0,0,''],[141756,8,-1,'2007-11-25 23:59',160,173,'2-0','1-0','3','15',1.5,0.75,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141760,8,-1,'2007-11-25 23:59',136,99,'2-0','1-0','16','13',0,0,'2.5','1',1,1,1,1,0,1,'']];
jh["R_15"] = [[141764,8,-1,'2007-12-01 03:30',173,169,'0-3','0-0','15','8',0,0,'2.5','1',1,1,1,1,0,0,''],[141765,8,-1,'2007-12-01 22:30',139,165,'0-3','0-1','9','5',0,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141766,8,-1,'2007-12-01 22:30',151,95,'1-0','1-0','6','10',1.25,0.5,'2.5/3','1',1,1,1,1,0,0,''],[141767,8,-1,'2007-12-01 22:30',155,99,'1-2','1-1','7','13',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141768,8,-1,'2007-12-01 22:30',132,160,'2-1','1-0','2','3',0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141769,8,-1,'2007-12-01 22:30',149,423,'2-2','1-1','12','11',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141762,8,-1,'2007-12-01 22:30',427,487,'2-0','0-0','18','4',0,0,'2.5','1',1,1,1,1,0,0,''],[141763,8,-1,'2007-12-02 23:59',493,136,'1-0','0-0','17','16',0,0,'2.5','1',1,1,1,1,0,0,''],[141761,8,-1,'2007-12-02 23:59',90,88,'0-1','0-1','14','1',-1.25,-0.5,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_16"] = [[141772,8,-1,'2007-12-08 03:30',99,90,'6-1','2-0','12','14',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141773,8,-1,'2007-12-08 22:30',423,151,'2-2','0-0','10','6',-0.25,-0.25,'2.5','1',1,1,1,1,0,0,''],[141774,8,-1,'2007-12-08 22:30',160,427,'0-0','0-0','3','18',1.5,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141775,8,-1,'2007-12-08 22:30',169,132,'4-3','3-2','7','2',-0.25,0,'2.5/3','1/1.5',1,1,1,1,0,1,''],[141778,8,-1,'2007-12-08 22:30',155,149,'3-1','1-0','8','13',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141770,8,-1,'2007-12-08 22:30',88,493,'0-0','0-0','1','17',2,0.75,'3/3.5','1.5',1,1,1,1,0,1,''],[141771,8,-1,'2007-12-08 22:30',95,487,'2-2','1-1','11','5',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[141776,8,-1,'2007-12-09 23:59',165,173,'3-0','1-0','4','15',1.5,0.75,'3','1/1.5',1,1,1,1,0,0,''],[141777,8,-1,'2007-12-09 23:59',136,139,'2-1','2-0','16','9',0.25,0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_17"] = [[141780,8,-1,'2007-12-15 03:30',427,169,'5-1','3-0','18','5',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[141779,8,-1,'2007-12-15 22:30',90,155,'2-0','0-0','15','8',-0.5,-0.25,'2.5/3','1',1,1,1,1,0,2,''],[141783,8,-1,'2007-12-15 22:30',139,88,'0-0','0-0','12','1',-0.75,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141784,8,-1,'2007-12-15 22:30',487,160,'1-1','0-0','6','3',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[141785,8,-1,'2007-12-15 22:30',151,136,'2-1','2-0','7','14',1,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141786,8,-1,'2007-12-15 22:30',132,165,'5-2','1-1','2','4',0.5,0.25,'3','1/1.5',1,1,1,1,0,0,''],[141787,8,-1,'2007-12-15 22:30',149,99,'4-0','2-0','13','9',0,0,'2.5/3','1',1,1,1,1,0,0,''],[141781,8,-1,'2007-12-16 23:59',493,423,'0-1','0-1','17','10',0,0,'2.5','1',1,1,1,1,0,0,''],[141782,8,-1,'2007-12-16 23:59',173,95,'2-0','2-0','16','11',0,0,'2.5','1',1,1,1,1,0,0,'']];
jh["R_18"] = [[141792,8,-1,'2008-02-02 03:30',173,88,'1-2','0-2','15','1',-1.25,-0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141793,8,-1,'2008-02-02 22:30',139,423,'0-3','0-1','12','9',0.25,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141794,8,-1,'2008-02-02 22:30',487,136,'2-0','0-0','6','16',0.25,0,'2.5','1',1,1,1,1,0,1,''],[141788,8,-1,'2008-02-02 22:30',90,149,'0-1','0-1','14','11',0,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141789,8,-1,'2008-02-02 22:30',427,165,'2-3','1-0','17','4',-0.25,-0.25,'2.5/3','1',1,1,1,1,0,0,''],[141790,8,-1,'2008-02-02 22:30',493,99,'3-3','2-0','18','10',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[141791,8,-1,'2008-02-02 22:30',160,169,'1-1','0-1','3','7',0.75,0.25,'2.5','1',1,1,1,1,0,1,''],[141795,8,-1,'2008-02-03 23:59',151,155,'4-1','1-0','5','8',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141796,8,-1,'2008-02-03 23:59',132,95,'1-2','1-0','2','13',1.5,0.75,'3/3.5','1/1.5',1,1,1,1,1,0,'']];
jh["R_19"] = [[141800,8,-1,'2008-02-09 03:30',423,90,'2-1','1-0','8','14',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141801,8,-1,'2008-02-09 22:30',169,487,'2-2','1-0','7','6',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141802,8,-1,'2008-02-09 22:30',165,160,'1-1','0-1','3','4',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141803,8,-1,'2008-02-09 22:30',136,173,'1-1','1-1','16','15',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[141804,8,-1,'2008-02-09 22:30',155,139,'1-3','1-2','9','13',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,1,0,''],[141805,8,-1,'2008-02-09 22:30',149,493,'2-1','1-1','10','18',1,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141798,8,-1,'2008-02-09 22:30',95,427,'3-3','2-1','11','17',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141799,8,-1,'2008-02-10 23:59',99,151,'2-3','1-2','12','5',0,0,'2.5/3','1',1,1,1,1,1,0,''],[141797,8,-1,'2008-02-10 23:59',88,132,'1-1','1-1','1','2',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_20"] = [[141813,8,-1,'2008-02-16 03:30',151,149,'1-2','0-0','3','9',1,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141814,8,-1,'2008-02-16 22:30',132,136,'2-0','1-0','2','16',1.5,0.5,'3','1/1.5',1,1,1,1,0,1,''],[141810,8,-1,'2008-02-16 22:30',173,423,'1-0','0-0','14','7',0,0,'2.5','1',1,1,1,1,0,0,''],[141811,8,-1,'2008-02-16 22:30',139,90,'1-0','0-0','12','15',1,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141812,8,-1,'2008-02-16 22:30',487,165,'2-2','0-1','6','4',0,0,'2.5/3','1',1,1,1,1,0,0,''],[141806,8,-1,'2008-02-16 22:30',427,99,'0-2','0-1','17','13',0,0,'2.5/3','1',1,1,1,1,0,0,''],[141807,8,-1,'2008-02-16 22:30',493,155,'2-3','0-2','18','10',-0.25,-0.25,'2.5/3','1',1,1,1,1,0,0,''],[141808,8,-1,'2008-02-17 23:59',160,95,'3-0','1-0','5','11',1,0.5,'2.5/3','1',1,1,1,1,0,0,''],[141809,8,-1,'2008-02-17 23:59',169,88,'0-3','0-0','8','1',-0.75,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_21"] = [[141817,8,-1,'2008-02-23 03:30',95,169,'2-1','1-0','13','9',0,0,'2.5/3','1',1,1,1,1,0,0,''],[141818,8,-1,'2008-02-23 22:30',99,173,'1-0','0-0','12','14',1,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141819,8,-1,'2008-02-23 22:30',423,132,'1-0','0-0','8','2',-0.5,-0.25,'2.5/3','1',1,1,1,1,0,1,''],[141820,8,-1,'2008-02-23 22:30',165,151,'1-0','0-0','4','5',0,0,'2.5/3','1',1,1,1,1,0,1,''],[141816,8,-1,'2008-02-23 22:30',90,493,'0-2','0-1','15','18',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141822,8,-1,'2008-02-23 22:30',155,487,'3-1','2-0','10','6',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141823,8,-1,'2008-02-23 22:30',149,139,'0-0','0-0','7','11',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141821,8,-1,'2008-02-24 23:59',136,427,'1-1','0-0','16','17',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[141815,8,-1,'2008-02-24 23:59',88,160,'1-1','0-0','1','3',1,0.25,'2.5/3','1/1.5',1,1,1,1,1,0,'']];
jh["R_22"] = [[141829,8,-1,'2008-03-01 03:35',139,493,'2-0','2-0','12','17',1,0.25,'2/2.5','1',1,1,1,1,0,0,''],[141830,8,-1,'2008-03-01 22:30',487,149,'3-1','1-1','6','9',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141831,8,-1,'2008-03-01 22:30',151,88,'0-1','0-1','5','1',0,,'2.5','',1,1,1,1,0,0,''],[141832,8,-1,'2008-03-01 22:30',132,99,'2-0','1-0','2','11',0.5,,'2.5/3','',1,1,1,1,0,0,''],[141827,8,-1,'2008-03-01 22:30',169,136,'2-1','1-0','10','16',0,,'2','',1,1,1,1,0,0,''],[141828,8,-1,'2008-03-01 22:30',173,90,'1-1','0-0','14','15',0.25,0.25,'2/2.5','1',1,1,1,1,0,0,''],[141824,8,-1,'2008-03-02 23:59',95,165,'2-0','0-0','13','3',-0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141826,8,-1,'2008-03-02 23:59',160,423,'4-1','1-0','4','7',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[141825,8,-1,'2008-03-12 02:00',427,155,'0-1','0-1','18','8',-0.5,-0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_23"] = [[141835,8,-1,'2008-03-08 03:30',99,139,'1-1','1-0','13','11',,,'','',1,1,1,1,0,0,''],[141836,8,-1,'2008-03-08 22:30',493,173,'1-1','1-1','18','14',0.25,0,'2/2.5','1',1,1,1,1,0,0,''],[141837,8,-1,'2008-03-08 22:30',423,95,'1-1','0-0','7','12',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141833,8,-1,'2008-03-08 22:30',88,487,'2-0','1-0','1','5',1.5,0.75,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141834,8,-1,'2008-03-08 22:30',90,151,'0-2','0-1','15','6',-0.5,-0.25,'2/2.5','1',1,1,1,1,0,0,''],[141840,8,-1,'2008-03-08 22:30',155,132,'6-3','2-1','9','2',0.25,0,'2.5/3','1',1,1,1,1,0,1,''],[141841,8,-1,'2008-03-08 22:30',149,427,'3-0','2-0','10','17',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141838,8,-1,'2008-03-09 23:59',165,169,'2-0','2-0','4','8',0.75,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141839,8,-1,'2008-03-09 23:59',136,160,'0-0','0-0','16','3',-0.25,0,'2/2.5','0.5/1',1,1,1,1,0,0,'']];
jh["R_24"] = [[141849,8,-1,'2008-03-15 03:30',151,493,'2-1','0-1','5','17',1.5,0.75,'2.5/3','1',1,1,1,1,0,0,''],[141842,8,-1,'2008-03-15 22:30',95,155,'1-1','1-0','12','6',-0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[141843,8,-1,'2008-03-15 22:30',427,88,'2-0','2-0','18','1',-1.5,-0.5,'3','1/1.5',1,1,1,1,0,0,''],[141844,8,-1,'2008-03-15 22:30',160,99,'1-0','0-0','3','13',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[141845,8,-1,'2008-03-15 22:30',169,90,'2-2','1-2','10','15',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[141846,8,-1,'2008-03-15 22:30',173,139,'0-0','0-0','14','11',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141847,8,-1,'2008-03-15 22:30',487,423,'0-1','0-1','7','9',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[141848,8,-1,'2008-03-16 23:59',165,136,'4-1','1-1','4','16',1,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141850,8,-1,'2008-03-16 23:59',132,149,'0-1','0-0','2','8',0.75,0.25,'3','1/1.5',1,1,1,1,0,0,'']];
jh["R_25"] = [[141855,8,-1,'2008-03-21 03:30',423,427,'2-1','0-0','8','15',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[141853,8,-1,'2008-03-22 22:30',99,487,'1-1','1-0','13','9',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[141854,8,-1,'2008-03-22 22:30',493,169,'1-1','0-1','18','10',0,0,'2.5','1',1,1,1,1,0,1,''],[141851,8,-1,'2008-03-22 22:30',88,165,'2-1','1-0','1','3',1,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141857,8,-1,'2008-03-22 22:30',136,95,'1-1','1-1','17','12',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141858,8,-1,'2008-03-22 22:30',155,173,'4-1','0-0','7','14',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141859,8,-1,'2008-03-22 22:30',149,160,'1-1','0-1','8','2',-0.25,0,'2.5','1',1,1,1,1,2,2,''],[141852,8,-1,'2008-03-23 23:59',90,132,'1-1','1-0','16','4',-0.75,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141856,8,-1,'2008-03-23 23:59',139,151,'1-2','0-2','11','5',-0.25,0,'2/2.5','1',1,1,1,1,0,0,'']];
jh["R_26"] = [[141864,8,-1,'2008-03-29 03:30',173,149,'0-1','0-0','14','8',0,0,'2.5','1',1,1,1,1,0,0,''],[141865,8,-1,'2008-03-29 22:30',487,151,'0-0','0-0','9','5',-0.25,0,'2/2.5','1',1,1,1,1,0,0,''],[141866,8,-1,'2008-03-29 22:30',165,423,'0-2','0-1','3','7',1,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141867,8,-1,'2008-03-29 22:30',136,88,'1-1','1-0','17','1',-1,-0.25,'2.5/3','1',1,1,1,1,0,0,''],[141868,8,-1,'2008-03-29 22:30',132,493,'1-2','0-2','4','18',1.75,0.75,'3','1/1.5',1,1,1,1,0,0,''],[141860,8,-1,'2008-03-29 22:30',95,99,'3-3','3-2','11','13',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141862,8,-1,'2008-03-29 22:30',160,90,'1-1','0-0','2','15',1.25,0.5,'2.5','1',1,1,1,1,1,1,''],[141863,8,-1,'2008-03-30 23:00',169,155,'0-0','0-0','10','6',-0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[141861,8,-1,'2008-03-30 23:00',427,139,'2-1','1-1','16','12',0,0,'2.5','1',1,1,1,1,0,0,'']];
jh["R_27"] = [[141872,8,-1,'2008-04-05 02:30',493,427,'0-1','0-1','16','15',0.25,0.25,'2/2.5','1',1,1,1,1,0,0,''],[141873,8,-1,'2008-04-05 21:30',423,136,'1-3','1-1','7','18',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[141874,8,-1,'2008-04-05 21:30',139,132,'1-2','1-1','12','5',-0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141875,8,-1,'2008-04-05 21:30',151,173,'1-0','0-0','3','14',1.5,0.75,'2.5','1',1,1,1,1,0,0,''],[141876,8,-1,'2008-04-05 21:30',155,160,'1-0','1-0','6','2',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[141877,8,-1,'2008-04-05 21:30',149,169,'3-2','2-1','8','10',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141870,8,-1,'2008-04-05 21:30',90,487,'1-0','0-0','17','9',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141871,8,-1,'2008-04-06 23:00',99,165,'2-1','0-0','13','4',0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[141869,8,-1,'2008-04-06 23:00',88,95,'3-1','1-1','1','11',1.75,0.75,'3','1/1.5',1,1,1,1,1,0,'']];
jh["R_28"] = [[141879,8,-1,'2008-04-12 21:30',95,139,'1-1','1-1','12','13',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141880,8,-1,'2008-04-12 21:30',427,90,'1-0','0-0','14','15',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141881,8,-1,'2008-04-12 21:30',160,493,'0-1','0-0','3','18',1.5,0.5,'2.5/3','1',1,1,1,1,0,0,''],[141882,8,-1,'2008-04-12 21:30',169,423,'2-1','1-1','10','8',0.25,0.25,'2.5','1',1,1,1,1,1,0,''],[141883,8,-1,'2008-04-12 21:30',487,173,'1-2','0-1','9','16',0.5,0.25,'2/2.5','1',1,1,1,1,0,0,''],[141886,8,-1,'2008-04-12 21:30',132,151,'5-1','2-1','4','2',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141884,8,-1,'2008-04-13 23:00',165,155,'3-0','2-0','6','5',0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[141878,8,-1,'2008-04-13 23:00',88,99,'5-0','4-0','1','11',1.25,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141885,8,-1,'2008-04-20 21:00',136,149,'1-0','0-0','17','7',0.25,0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_29"] = [[141891,8,-1,'2008-04-16 02:00',173,132,'1-2','0-0','15','2',-0.75,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141892,8,-1,'2008-04-16 02:00',139,160,'0-0','0-0','13','5',0,0,'2/2.5','1',1,1,1,1,0,0,''],[141893,8,-1,'2008-04-16 02:00',151,427,'5-0','3-0','3','14',1.25,0.5,'2.5/3','1',1,1,1,1,0,0,''],[141895,8,-1,'2008-04-16 02:00',149,95,'0-1','0-0','7','11',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141894,8,-1,'2008-04-17 02:00',155,136,'3-0','3-0','6','18',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141887,8,-1,'2008-04-17 02:00',90,165,'1-0','0-0','17','4',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[141888,8,-1,'2008-04-17 02:00',99,169,'1-3','0-2','12','10',0.25,0,'2.5/3','1',1,1,1,1,0,0,''],[141889,8,-1,'2008-04-17 02:00',493,487,'0-1','0-0','16','9',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141890,8,-1,'2008-04-17 02:00',423,88,'1-3','1-0','8','1',-0.5,-0.25,'2.5','1',1,1,1,1,0,0,'']];
jh["R_30"] = [[141899,8,-1,'2008-04-26 02:30',423,99,'1-1','0-0','8','13',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141900,8,-1,'2008-04-26 21:30',160,151,'0-1','0-1','4','3',0.25,0,'2/2.5','0.5/1',1,1,1,1,0,0,''],[141901,8,-1,'2008-04-26 21:30',169,139,'2-2','2-0','9','12',0.25,0.25,'2.5','1',1,1,1,1,0,0,''],[141902,8,-1,'2008-04-26 21:30',487,132,'3-3','1-2','10','2',-0.5,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141904,8,-1,'2008-04-26 21:30',136,90,'2-2','2-0','17','15',0.75,0.25,'2.5','1',1,1,1,1,0,0,''],[141897,8,-1,'2008-04-26 21:30',95,493,'1-1','0-1','11','18',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141898,8,-1,'2008-04-26 21:30',427,173,'2-1','0-1','14','16',0.25,0.25,'2/2.5','0.5/1',1,1,1,1,1,0,''],[141896,8,-1,'2008-04-27 23:00',88,155,'4-1','1-1','1','5',0.5,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141903,8,-1,'2008-04-27 23:00',165,149,'2-2','1-2','6','7',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_31"] = [[141906,8,-1,'2008-05-03 02:30',99,136,'0-0','0-0','13','16',0.25,0,'2.5','1',1,1,1,1,0,0,''],[141905,8,-1,'2008-05-03 21:30',90,95,'2-0','0-0','15','11',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141908,8,-1,'2008-05-03 21:30',173,160,'1-3','0-2','17','5',-0.25,0,'2/2.5','1',1,1,1,1,0,0,''],[141909,8,-1,'2008-05-03 21:30',139,487,'3-1','2-0','12','10',0.5,0.25,'2.5','1',1,1,1,1,0,0,''],[141910,8,-1,'2008-05-03 21:30',151,169,'1-1','1-1','3','9',1,0.5,'2.5','1',1,1,1,1,0,0,''],[141911,8,-1,'2008-05-03 21:30',155,423,'4-1','3-0','6','8',1,0.25,'2.5/3','1',1,1,1,1,0,0,''],[141912,8,-1,'2008-05-03 21:30',132,427,'2-0','0-0','2','14',1.5,0.5,'3/3.5','1/1.5',1,1,1,1,0,0,''],[141913,8,-1,'2008-05-04 23:00',149,88,'0-0','0-0','7','1',-0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141907,8,-1,'2008-05-04 23:00',493,165,'3-2','2-1','18','4',-0.25,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_32"] = [[141915,8,-1,'2008-05-07 02:00',95,151,'0-3','0-1','11','3',-0.5,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141916,8,-1,'2008-05-07 02:00',99,155,'3-2','1-0','13','5',-0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141919,8,-1,'2008-05-07 02:00',169,173,'3-0','1-0','8','18',0.5,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141920,8,-1,'2008-05-07 02:00',487,427,'1-1','0-0','10','14',0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141921,8,-1,'2008-05-08 02:00',165,139,'1-2','0-1','6','12',1,0.25,'3','1/1.5',1,1,1,1,1,0,''],[141922,8,-1,'2008-05-08 02:00',136,493,'2-0','2-0','17','16',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141917,8,-1,'2008-05-08 02:00',423,149,'2-3','1-2','9','7',0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141918,8,-1,'2008-05-08 02:00',160,132,'0-1','0-0','4','2',0.25,0,'3','1/1.5',1,1,1,1,0,2,''],[141914,8,-1,'2008-05-08 02:00',88,90,'2-0','1-0','1','15',1,0.5,'2.5/3','1/1.5',1,1,1,1,0,0,'']];
jh["R_33"] = [[141923,8,-1,'2008-05-10 21:30',90,99,'2-2','2-1','15','12',0.75,0.25,'2.5/3','1/1.5',1,1,1,1,0,1,''],[141924,8,-1,'2008-05-10 21:30',427,160,'2-0','1-0','14','4',-0.25,0,'2.5','1',1,1,1,1,0,0,''],[141925,8,-1,'2008-05-10 21:30',493,88,'2-3','0-3','17','1',-0.25,-0.25,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141926,8,-1,'2008-05-10 21:30',173,165,'1-2','0-1','18','6',-0.5,-0.25,'3','1/1.5',1,1,1,1,0,1,''],[141927,8,-1,'2008-05-10 21:30',139,136,'1-0','0-0','11','16',-0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141928,8,-1,'2008-05-10 21:30',487,95,'1-3','0-1','9','13',0.25,0,'2.5/3','1/1.5',1,1,1,1,0,0,''],[141929,8,-1,'2008-05-10 21:30',151,423,'1-0','0-0','3','10',1.5,0.75,'3','1/1.5',1,1,1,1,0,0,''],[141930,8,-1,'2008-05-10 21:30',132,169,'6-1','2-0','2','8',1.5,0.5,'3/3.5','1.5',1,1,1,1,0,0,''],[141931,8,-1,'2008-05-10 21:30',149,155,'4-0','2-0','7','5',0,0,'3','1/1.5',1,1,1,1,0,1,'']];
jh["R_34"] = [[141932,8,-1,'2008-05-17 21:30',88,139,'4-1','3-0','1','9',1.5,0.5,'3/3.5','1/1.5',1,1,1,1,0,0,''],[141933,8,-1,'2008-05-17 21:30',95,173,'1-2','1-1','12','18',0.75,0.25,'3/3.5','1/1.5',1,1,1,1,0,0,''],[141934,8,-1,'2008-05-17 21:30',99,149,'2-4','1-2','13','6',-0.25,-0.25,'3','1/1.5',1,1,1,1,0,0,''],[141935,8,-1,'2008-05-17 21:30',423,493,'4-2','3-0','11','17',0.75,0.25,'3','1/1.5',1,1,1,1,0,0,''],[141936,8,-1,'2008-05-17 21:30',160,487,'7-0','3-0','5','10',1.5,0.5,'3','1/1.5',1,1,1,1,0,0,''],[141937,8,-1,'2008-05-17 21:30',169,427,'4-0','2-0','8','14',0.75,0.25,'3/3.5','1/1.5',1,1,1,1,0,0,''],[141938,8,-1,'2008-05-17 21:30',165,132,'0-1','0-0','4','2',0,0,'3/3.5','1.5',1,1,1,1,0,0,''],[141939,8,-1,'2008-05-17 21:30',136,151,'0-2','0-1','16','3',0,0,'3','1/1.5',1,1,1,1,0,0,''],[141940,8,-1,'2008-05-17 21:30',155,90,'2-2','0-1','7','15',1,0.25,'3','1/1.5',1,1,1,1,0,0,'']];
var scoreColor = ['#FF9966|欧冠杯小组赛资格|歐冠盃小組賽資格|UEFA CL qualifying','#a2e76f|欧冠杯附加|歐冠盃附加|UEFA CL play-offs','#00CCFF|联盟杯资格|歐協盃資格|UEFA Cup','#B1A7A7|降级球队|降級球隊|Degrade Team'];
var totalScore = [[0,1,88,3,34,22,10,2,68,21,47,'64.7','29.4','5.9',2.00,0.62,76,0,'',0,0,1,0,0,0,''],[0,2,132,7,34,20,6,8,75,45,30,'58.8','17.6','23.5',2.21,1.32,66,0,'',0,1,0,0,0,0,''],[1,3,151,1,34,18,10,6,55,32,23,'52.9','29.4','17.6',1.62,0.94,64,0,'',0,0,1,0,0,0,''],[2,4,160,4,34,14,12,8,47,26,21,'41.2','35.3','23.5',1.38,0.76,54,0,'',1,2,0,2,2,0,''],[2,5,149,3,34,15,9,10,58,46,12,'44.1','26.5','29.4',1.71,1.35,54,0,'',2,1,1,0,0,0,''],[-1,6,155,6,34,16,4,14,57,57,0,'47.1','11.8','41.2',1.68,1.68,52,0,'',0,2,0,2,2,1,''],[-1,7,165,2,34,15,6,13,57,40,17,'44.1','17.6','38.2',1.68,1.18,51,0,'',2,1,2,2,0,2,''],[-1,8,169,5,34,13,10,11,54,56,-2,'38.2','29.4','32.4',1.59,1.65,49,0,'',0,1,1,0,2,0,''],[-1,9,423,0,34,12,10,12,43,50,-7,'35.3','29.4','35.3',1.26,1.47,46,0,'',2,1,2,2,2,0,''],[-1,10,139,0,34,12,8,14,39,44,-5,'35.3','23.5','41.2',1.15,1.29,44,0,'',1,1,0,0,0,2,''],[-1,11,487,1,34,11,10,13,38,53,-15,'32.4','29.4','38.2',1.12,1.56,43,0,'',0,1,2,1,2,2,''],[-1,12,95,1,34,10,11,13,48,54,-6,'29.4','32.4','38.2',1.41,1.59,41,0,'',0,1,2,2,0,2,''],[-1,13,99,6,34,10,10,14,50,62,-12,'29.4','29.4','41.2',1.47,1.82,40,0,'',2,1,1,0,1,2,''],[-1,14,427,1,34,9,9,16,35,56,-21,'26.5','26.5','47.1',1.03,1.65,36,0,'',2,0,2,1,0,2,''],[-1,15,90,1,34,8,10,16,35,60,-25,'23.5','29.4','47.1',1.03,1.76,34,0,'',0,1,0,2,1,1,''],[3,16,136,3,34,7,10,17,35,51,-16,'20.6','29.4','50.0',1.03,1.50,31,0,'',0,1,1,0,2,2,''],[3,17,173,0,34,8,6,20,30,52,-22,'23.5','17.6','58.8',0.88,1.53,30,0,'',2,2,2,2,2,0,''],[3,18,493,5,34,8,5,21,36,55,-19,'23.5','14.7','61.8',1.06,1.62,29,0,'',2,1,0,2,2,2,'']];
var homeScore = [[1,88,17,12,5,0,41,8,33,'70.6','29.4','0.0',2.41,0.47,41],[2,132,17,13,0,4,48,19,29,'76.5','0.0','23.5',2.82,1.12,39],[3,155,17,12,2,3,39,19,20,'70.6','11.8','17.6',2.29,1.12,38],[4,151,17,10,4,3,29,13,16,'58.8','23.5','17.6',1.71,0.76,34],[5,160,17,9,5,3,30,11,19,'52.9','29.4','17.6',1.76,0.65,32],[6,165,17,9,4,4,32,13,19,'52.9','23.5','23.5',1.88,0.76,31],[7,139,17,9,3,5,21,18,3,'52.9','17.6','29.4',1.24,1.06,30],[8,169,17,8,5,4,32,27,5,'47.1','29.4','23.5',1.88,1.59,29],[9,423,17,8,4,5,24,24,0,'47.1','23.5','29.4',1.41,1.41,28],[10,149,17,7,6,4,28,17,11,'41.2','35.3','23.5',1.65,1.00,27],[11,99,17,7,5,5,29,24,5,'41.2','29.4','29.4',1.71,1.41,26],[12,427,17,8,2,7,25,20,5,'47.1','11.8','41.2',1.47,1.18,26],[13,90,17,7,4,6,21,18,3,'41.2','23.5','35.3',1.24,1.06,25],[14,95,17,5,9,3,32,28,4,'29.4','52.9','17.6',1.88,1.65,24],[15,487,17,6,6,5,23,22,1,'35.3','35.3','29.4',1.35,1.29,24],[16,136,17,5,7,5,21,18,3,'29.4','41.2','29.4',1.24,1.06,22],[17,173,17,5,4,8,17,21,-4,'29.4','23.5','47.1',1.00,1.24,19],[18,493,17,3,3,11,19,29,-10,'17.6','17.6','64.7',1.12,1.71,12]];
var guestScore = [[1,88,17,10,5,2,27,13,14,'58.8','29.4','11.8',1.59,0.76,35],[2,151,17,8,6,3,26,19,7,'47.1','35.3','17.6',1.53,1.12,30],[3,149,17,8,3,6,30,29,1,'47.1','17.6','35.3',1.76,1.71,27],[4,132,17,7,6,4,27,26,1,'41.2','35.3','23.5',1.59,1.53,27],[5,160,17,5,7,5,17,15,2,'29.4','41.2','29.4',1.00,0.88,22],[6,165,17,6,2,9,25,27,-2,'35.3','11.8','52.9',1.47,1.59,20],[7,169,17,5,5,7,22,29,-7,'29.4','29.4','41.2',1.29,1.71,20],[8,487,17,5,4,8,15,31,-16,'29.4','23.5','47.1',0.88,1.82,19],[9,423,17,4,6,7,19,26,-7,'23.5','35.3','41.2',1.12,1.53,18],[10,493,17,5,2,10,17,26,-9,'29.4','11.8','58.8',1.00,1.53,17],[11,95,17,5,2,10,16,26,-10,'29.4','11.8','58.8',0.94,1.53,17],[12,139,17,3,5,9,18,26,-8,'17.6','29.4','52.9',1.06,1.53,14],[13,99,17,3,5,9,21,38,-17,'17.6','29.4','52.9',1.24,2.24,14],[14,155,17,4,2,11,18,38,-20,'23.5','11.8','64.7',1.06,2.24,14],[15,173,17,3,2,12,13,31,-18,'17.6','11.8','70.6',0.76,1.82,11],[16,427,17,1,7,9,10,36,-26,'5.9','41.2','52.9',0.59,2.12,10],[17,136,17,2,3,12,14,33,-19,'11.8','17.6','70.6',0.82,1.94,9],[18,90,17,1,6,10,14,42,-28,'5.9','35.3','58.8',0.82,2.47,9]];
var halfScore = [[1,151,34,18,12,4,29,10,19,'52.9','35.3','11.8',0.85,0.29,66],[2,88,34,16,13,5,30,12,18,'47.1','38.2','14.7',0.88,0.35,61],[3,132,34,13,15,6,31,21,10,'38.2','44.1','17.6',0.91,0.62,54],[4,160,34,13,14,7,20,8,12,'38.2','41.2','20.6',0.59,0.24,53],[5,149,34,12,14,8,26,21,5,'35.3','41.2','23.5',0.76,0.62,50],[6,423,34,10,19,5,18,14,4,'29.4','55.9','14.7',0.53,0.41,49],[7,169,34,12,13,9,27,24,3,'35.3','38.2','26.5',0.79,0.71,49],[8,155,34,12,10,12,26,24,2,'35.3','29.4','35.3',0.76,0.71,46],[9,95,34,10,15,9,27,24,3,'29.4','44.1','26.5',0.79,0.71,45],[10,165,34,10,13,11,20,15,5,'29.4','38.2','32.4',0.59,0.44,43],[11,427,34,7,16,11,14,19,-5,'20.6','47.1','32.4',0.41,0.56,37],[12,139,34,7,16,11,16,22,-6,'20.6','47.1','32.4',0.47,0.65,37],[13,99,34,8,13,13,20,30,-10,'23.5','38.2','38.2',0.59,0.88,37],[14,493,34,9,10,15,16,27,-11,'26.5','29.4','44.1',0.47,0.79,37],[15,136,34,7,15,12,17,24,-7,'20.6','44.1','35.3',0.50,0.71,36],[16,173,34,6,16,12,12,19,-7,'17.6','47.1','35.3',0.35,0.56,34],[17,90,34,6,15,13,9,23,-14,'17.6','44.1','38.2',0.26,0.68,33],[18,487,34,3,15,16,7,28,-21,'8.8','44.1','47.1',0.21,0.82,24]];
var homeHalfScore = [[1,132,17,11,4,2,20,7,13,'64.7','23.5','11.8',1.18,0.41,37],[2,88,17,9,7,1,18,4,14,'52.9','41.2','5.9',1.06,0.24,34],[3,151,17,8,7,2,15,5,10,'47.1','41.2','11.8',0.88,0.29,31],[4,155,17,8,5,4,18,7,11,'47.1','29.4','23.5',1.06,0.41,29],[5,160,17,7,8,2,11,2,9,'41.2','47.1','11.8',0.65,0.12,29],[6,169,17,7,8,2,18,11,7,'41.2','47.1','11.8',1.06,0.65,29],[7,149,17,7,7,3,14,6,8,'41.2','41.2','17.6',0.82,0.35,28],[8,95,17,7,7,3,19,12,7,'41.2','41.2','17.6',1.12,0.71,28],[9,423,17,6,10,1,11,4,7,'35.3','58.8','5.9',0.65,0.24,28],[10,427,17,6,6,5,12,8,4,'35.3','35.3','29.4',0.71,0.47,24],[11,99,17,6,6,5,12,10,2,'35.3','35.3','29.4',0.71,0.59,24],[12,136,17,5,7,5,11,9,2,'29.4','41.2','29.4',0.65,0.53,22],[13,139,17,4,9,4,10,8,2,'23.5','52.9','23.5',0.59,0.47,21],[14,165,17,5,5,7,13,9,4,'29.4','29.4','41.2',0.76,0.53,20],[15,173,17,4,8,5,6,8,-2,'23.5','47.1','29.4',0.35,0.47,20],[16,90,17,3,9,5,4,6,-2,'17.6','52.9','29.4',0.24,0.35,18],[17,487,17,2,8,7,5,11,-6,'11.8','47.1','41.2',0.29,0.65,14],[18,493,17,2,6,9,6,15,-9,'11.8','35.3','52.9',0.35,0.88,12]];
var guestHalfScore = [[1,151,17,10,5,2,14,5,9,'58.8','29.4','11.8',0.82,0.29,35],[2,88,17,7,6,4,12,8,4,'41.2','35.3','23.5',0.71,0.47,27],[3,493,17,7,4,6,10,12,-2,'41.2','23.5','35.3',0.59,0.71,25],[4,160,17,6,6,5,9,6,3,'35.3','35.3','29.4',0.53,0.35,24],[5,165,17,5,8,4,7,6,1,'29.4','47.1','23.5',0.41,0.35,23],[6,149,17,5,7,5,12,15,-3,'29.4','41.2','29.4',0.71,0.88,22],[7,423,17,4,9,4,7,10,-3,'23.5','52.9','23.5',0.41,0.59,21],[8,169,17,5,5,7,9,13,-4,'29.4','29.4','41.2',0.53,0.76,20],[9,132,17,2,11,4,11,14,-3,'11.8','64.7','23.5',0.65,0.82,17],[10,95,17,3,8,6,8,12,-4,'17.6','47.1','35.3',0.47,0.71,17],[11,155,17,4,5,8,8,17,-9,'23.5','29.4','47.1',0.47,1.00,17],[12,139,17,3,7,7,6,14,-8,'17.6','41.2','41.2',0.35,0.82,16],[13,90,17,3,6,8,5,17,-12,'17.6','35.3','47.1',0.29,1.00,15],[14,173,17,2,8,7,6,11,-5,'11.8','47.1','41.2',0.35,0.65,14],[15,136,17,2,8,7,6,15,-9,'11.8','47.1','41.2',0.35,0.88,14],[16,427,17,1,10,6,2,11,-9,'5.9','58.8','35.3',0.12,0.65,13],[17,99,17,2,7,8,8,20,-12,'11.8','41.2','47.1',0.47,1.18,13],[18,487,17,1,7,9,2,17,-15,'5.9','41.2','52.9',0.12,1.00,10]];
var lastUpdateTime = '2014-01-26 14:22:55';
