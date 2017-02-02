var arrLeague = [8,'德国甲组联赛','德國甲組聯賽','German Bundesliga','2016-2017','#990099','league_match/images/20130119152241.jpg',34,18,'德甲','德甲','GER D1','德国足球甲级联赛共由18支球队组成，采取双循环赛制（每支球队分别以主、客场身份和其他球队交锋两次）。单场比赛积分计算方法是胜者得3分、负者得0分、平局则双方各得1分，赛季末按累计积分高低排名，同分则依次按照净胜球、进球数的多少来决定名次。&nbsp;<br/>　　联赛前三名直接参加下赛季冠军联赛小组赛，第四名取得参加下赛季冠军联赛外围赛的资格，五、六名参加下赛季欧罗巴联赛（德国杯冠军也可以参加欧罗巴联赛，而如果德国杯冠军已经取得欧战资格，则其名额将让给德国杯亚军）。联赛排名最后2名的球队直接降到乙级联赛，而倒数第三名则与乙级联赛第三名进行主客场两回合的升降级附加赛。'];
var arrTeam = [[88,'拜仁慕尼黑','拜仁慕尼黑','Bayern Munchen','拜仁慕尼黑','images/2013117153233.jpg',0],[99,'多特蒙德','多蒙特','Borussia Dortmund','多蒙特','images/2013119144655.jpg',0],[128,'门兴格拉德巴赫','慕遜加柏','Borussia Monchengladbach','慕遜加柏','images/2013119144848.jpg',0],[132,'云达不莱梅','雲達不萊梅','Werder Bremen','雲達不萊梅','images/2013119144220.jpg',0],[139,'柏林赫塔','哈化柏林','Hertha Berlin','哈化柏林','images/201312095315.jpg',0],[149,'沃尔夫斯堡','沃爾夫斯堡','VfL Wolfsburg','沃爾夫斯堡','images/2013119145123.jpg',0],[151,'沙尔克04','史浩克零四','Schalke 04','史浩克零四','images/2013119145317.jpg',0],[160,'汉堡','漢堡','Hamburger SV','漢堡','images/2013119151640.jpg',0],[162,'美因茨','緬恩斯','FSV Mainz 05','緬恩斯','images/201312093847.jpg',0],[165,'勒沃库森','利華古遜','Bayer Leverkusen','利華古遜','images/2013117153453.jpg',0],[172,'弗赖堡','費雷堡','SC Freiburg','費雷堡','images/201312094312.jpg',0],[423,'法兰克福','法蘭克福','Eintracht Frankfurt','法蘭克福','images/201312094508.jpg',0],[490,'科隆','科隆','FC Koln','科隆','images/2013120101406.jpg',0],[1078,'霍芬海姆','賀芬咸','TSG Hoffenheim','賀芬咸','images/201312092935.jpg',0],[1080,'达姆斯塔特','達斯泰特','Darmstadt','達斯泰特','images/2013120114115.jpg',0],[1135,'奥格斯堡','奧格斯堡','Augsburg','奧格斯堡','images/201312093038.jpg',0],[2786,'因戈尔施塔特','恩高斯達特','Ingolstadt','恩高斯達特','images/2013120104003.jpg',0],[13201,'RB莱比锡','RB萊比錫','RB Leipzig','RB萊比錫','images/20140820162852.png',0]];
var scoreColor = ['#FF9966|欧冠杯小组赛资格|歐冠盃小組賽資格|UEFA CL qualifying','#a2e76f|欧冠杯附加|歐冠盃附加|UEFA CL play-offs','#51AB8D|升降级附加|升降級附加|Promotion Play-Offs','#B1A7A7|降级球队|降級球隊|Degrade Team','#00CCFF|欧罗巴联赛杯小组赛|歐霸盃小组赛|UEFA EL qualifying'];
var totalScore = [[0,1,88,0,17,13,3,1,40,10,30,'76.5','17.6','5.9',2.35,0.59,42,0,'',0,0,0,0,0,0,''],[0,2,13201,1,17,12,3,2,34,15,19,'70.6','17.6','11.8',2.00,0.88,39,0,'',0,0,2,0,2,0,''],[0,3,1078,0,17,7,10,0,30,17,13,'41.2','58.8','0.0',1.76,1.00,31,0,'',1,0,1,1,1,0,''],[1,4,99,2,17,8,6,3,37,20,17,'47.1','35.3','17.6',2.18,1.18,30,0,'',2,0,1,1,1,0,''],[4,5,139,2,17,9,3,5,25,19,6,'52.9','17.6','29.4',1.47,1.12,30,0,'',0,0,2,2,0,2,''],[4,6,423,4,17,8,5,4,22,15,7,'47.1','29.4','23.5',1.29,0.88,29,0,'',0,1,1,2,0,2,''],[-1,7,490,1,17,6,8,3,21,15,6,'35.3','47.1','17.6',1.24,0.88,26,0,'',1,2,1,1,1,1,''],[-1,8,165,2,17,7,3,7,26,25,1,'41.2','17.6','41.2',1.53,1.47,24,0,'',2,1,0,2,1,0,''],[-1,9,172,1,17,7,2,8,22,29,-7,'41.2','11.8','47.1',1.29,1.71,23,0,'',2,1,0,1,0,2,''],[-1,10,151,1,17,6,3,8,21,19,2,'35.3','17.6','47.1',1.24,1.12,21,0,'',0,2,2,1,2,0,''],[-1,11,162,5,17,6,3,8,26,30,-4,'35.3','17.6','47.1',1.53,1.76,21,0,'',2,2,2,0,2,1,''],[-1,12,149,2,17,5,4,8,16,24,-8,'29.4','23.5','47.1',0.94,1.41,19,0,'',1,2,2,0,0,0,''],[-1,13,1135,1,17,4,6,7,13,19,-6,'23.5','35.3','41.2',0.76,1.12,18,0,'',1,1,2,0,1,2,''],[-1,14,128,1,17,4,5,8,15,25,-10,'23.5','29.4','47.1',0.88,1.47,17,0,'',1,2,0,2,2,1,''],[-1,15,132,2,17,4,4,9,21,36,-15,'23.5','23.5','52.9',1.24,2.12,16,0,'',1,0,0,1,1,2,''],[2,16,160,5,17,3,4,10,14,32,-18,'17.6','23.5','58.8',0.82,1.88,13,0,'',1,0,0,2,0,2,''],[3,17,2786,3,17,3,3,11,14,28,-14,'17.6','17.6','64.7',0.82,1.65,12,0,'',1,2,0,0,2,2,''],[3,18,1080,2,17,2,3,12,11,30,-19,'11.8','17.6','70.6',0.65,1.76,9,0,'',2,2,2,2,2,1,'']];
var homeScore = [[1,88,9,7,2,0,26,4,22,'77.8','22.2','0.0',2.89,0.44,23],[2,13201,8,7,1,0,17,5,12,'87.5','12.5','0.0',2.13,0.63,22],[3,139,8,7,0,1,15,4,11,'87.5','0.0','12.5',1.88,0.50,21],[4,99,8,5,3,0,18,5,13,'62.5','37.5','0.0',2.25,0.63,18],[5,423,8,5,3,0,14,7,7,'62.5','37.5','0.0',1.75,0.88,18],[6,1078,9,4,5,0,16,9,7,'44.4','55.6','0.0',1.78,1.00,17],[7,490,8,4,4,0,13,4,9,'50.0','50.0','0.0',1.63,0.50,16],[8,151,9,5,1,3,16,9,7,'55.6','11.1','33.3',1.78,1.00,16],[9,128,9,4,3,2,12,7,5,'44.4','33.3','22.2',1.33,0.78,15],[10,172,8,5,0,3,10,11,-1,'62.5','0.0','37.5',1.25,1.38,15],[11,162,8,4,2,2,18,14,4,'50.0','25.0','25.0',2.25,1.75,14],[12,165,9,4,2,3,15,13,2,'44.4','22.2','33.3',1.67,1.44,14],[13,132,9,3,1,5,12,15,-3,'33.3','11.1','55.6',1.33,1.67,10],[14,1080,9,2,3,4,7,10,-3,'22.2','33.3','44.4',0.78,1.11,9],[15,1135,9,2,3,4,6,12,-6,'22.2','33.3','44.4',0.67,1.33,9],[16,149,9,2,2,5,6,12,-6,'22.2','22.2','55.6',0.67,1.33,8],[17,160,8,2,2,4,8,17,-9,'25.0','25.0','50.0',1.00,2.13,8],[18,2786,8,1,2,5,7,14,-7,'12.5','25.0','62.5',0.88,1.75,5]];
var guestScore = [[1,88,8,6,1,1,14,6,8,'75.0','12.5','12.5',1.75,0.75,19],[2,13201,9,5,2,2,17,10,7,'55.6','22.2','22.2',1.89,1.11,17],[3,1078,8,3,5,0,14,8,6,'37.5','62.5','0.0',1.75,1.00,14],[4,99,9,3,3,3,19,15,4,'33.3','33.3','33.3',2.11,1.67,12],[5,423,9,3,2,4,8,8,0,'33.3','22.2','44.4',0.89,0.89,11],[6,149,8,3,2,3,10,12,-2,'37.5','25.0','37.5',1.25,1.50,11],[7,165,8,3,1,4,11,12,-1,'37.5','12.5','50.0',1.38,1.50,10],[8,490,9,2,4,3,8,11,-3,'22.2','44.4','33.3',0.89,1.22,10],[9,1135,8,2,3,3,7,7,0,'25.0','37.5','37.5',0.88,0.88,9],[10,139,9,2,3,4,10,15,-5,'22.2','33.3','44.4',1.11,1.67,9],[11,172,9,2,2,5,12,18,-6,'22.2','22.2','55.6',1.33,2.00,8],[12,2786,9,2,1,6,7,14,-7,'22.2','11.1','66.7',0.78,1.56,7],[13,162,9,2,1,6,8,16,-8,'22.2','11.1','66.7',0.89,1.78,7],[14,132,8,1,3,4,9,21,-12,'12.5','37.5','50.0',1.13,2.63,6],[15,151,8,1,2,5,5,10,-5,'12.5','25.0','62.5',0.63,1.25,5],[16,160,9,1,2,6,6,15,-9,'11.1','22.2','66.7',0.67,1.67,5],[17,128,8,0,2,6,3,18,-15,'0.0','25.0','75.0',0.38,2.25,2],[18,1080,8,0,0,8,4,20,-16,'0.0','0.0','100.0',0.50,2.50,0]];
var halfScore = [[1,88,17,8,8,1,20,7,13,'47.1','47.1','5.9',1.18,0.41,32],[2,1078,17,8,7,2,15,9,6,'47.1','41.2','11.8',0.88,0.53,31],[3,99,17,8,4,5,13,8,5,'47.1','23.5','29.4',0.76,0.47,28],[4,13201,17,6,8,3,15,10,5,'35.3','47.1','17.6',0.88,0.59,26],[5,423,17,6,7,4,9,8,1,'35.3','41.2','23.5',0.53,0.47,25],[6,149,17,6,7,4,7,7,0,'35.3','41.2','23.5',0.41,0.41,25],[7,128,17,6,6,5,10,8,2,'35.3','35.3','29.4',0.59,0.47,24],[8,162,17,5,6,6,13,13,0,'29.4','35.3','35.3',0.76,0.76,21],[9,490,17,4,8,5,11,10,1,'23.5','47.1','29.4',0.65,0.59,20],[10,151,17,2,13,2,7,7,0,'11.8','76.5','11.8',0.41,0.41,19],[11,165,17,4,7,6,10,12,-2,'23.5','41.2','35.3',0.59,0.71,19],[12,132,17,5,4,8,10,18,-8,'29.4','23.5','47.1',0.59,1.06,19],[13,139,17,4,6,7,9,11,-2,'23.5','35.3','41.2',0.53,0.65,18],[14,160,17,2,12,3,6,9,-3,'11.8','70.6','17.6',0.35,0.53,18],[15,172,17,4,6,7,8,13,-5,'23.5','35.3','41.2',0.47,0.76,18],[16,2786,17,4,5,8,6,12,-6,'23.5','29.4','47.1',0.35,0.71,17],[17,1080,17,2,10,5,3,6,-3,'11.8','58.8','29.4',0.18,0.35,16],[18,1135,17,1,12,4,3,7,-4,'5.9','70.6','23.5',0.18,0.41,15]];
var homeHalfScore = [[1,88,9,6,3,0,14,3,11,'66.7','33.3','0.0',1.56,0.33,21],[2,1078,9,6,3,0,10,3,7,'66.7','33.3','0.0',1.11,0.33,21],[3,13201,8,5,3,0,10,2,8,'62.5','37.5','0.0',1.25,0.25,18],[4,128,9,5,3,1,8,1,7,'55.6','33.3','11.1',0.89,0.11,18],[5,99,8,5,2,1,6,2,4,'62.5','25.0','12.5',0.75,0.25,17],[6,490,8,4,4,0,9,2,7,'50.0','50.0','0.0',1.13,0.25,16],[7,423,8,4,4,0,6,2,4,'50.0','50.0','0.0',0.75,0.25,16],[8,162,8,4,3,1,11,5,6,'50.0','37.5','12.5',1.38,0.63,15],[9,132,9,4,3,2,6,5,1,'44.4','33.3','22.2',0.67,0.56,15],[10,165,9,4,2,3,6,5,1,'44.4','22.2','33.3',0.67,0.56,14],[11,149,9,3,5,1,4,3,1,'33.3','55.6','11.1',0.44,0.33,14],[12,139,8,3,4,1,5,2,3,'37.5','50.0','12.5',0.63,0.25,13],[13,151,9,2,7,0,5,3,2,'22.2','77.8','0.0',0.56,0.33,13],[14,1080,9,2,6,1,2,1,1,'22.2','66.7','11.1',0.22,0.11,12],[15,2786,8,3,1,4,4,6,-2,'37.5','12.5','50.0',0.50,0.75,10],[16,160,8,1,5,2,3,6,-3,'12.5','62.5','25.0',0.38,0.75,8],[17,172,8,1,4,3,3,6,-3,'12.5','50.0','37.5',0.38,0.75,7],[18,1135,9,0,6,3,1,5,-4,'0.0','66.7','33.3',0.11,0.56,6]];
var guestHalfScore = [[1,88,8,2,5,1,6,4,2,'25.0','62.5','12.5',0.75,0.50,11],[2,99,9,3,2,4,7,6,1,'33.3','22.2','44.4',0.78,0.67,11],[3,149,8,3,2,3,3,4,-1,'37.5','25.0','37.5',0.38,0.50,11],[4,172,9,3,2,4,5,7,-2,'33.3','22.2','44.4',0.56,0.78,11],[5,160,9,1,7,1,3,3,0,'11.1','77.8','11.1',0.33,0.33,10],[6,1078,8,2,4,2,5,6,-1,'25.0','50.0','25.0',0.63,0.75,10],[7,1135,8,1,6,1,2,2,0,'12.5','75.0','12.5',0.25,0.25,9],[8,423,9,2,3,4,3,6,-3,'22.2','33.3','44.4',0.33,0.67,9],[9,13201,9,1,5,3,5,8,-3,'11.1','55.6','33.3',0.56,0.89,8],[10,2786,9,1,4,4,2,6,-4,'11.1','44.4','44.4',0.22,0.67,7],[11,151,8,0,6,2,2,4,-2,'0.0','75.0','25.0',0.25,0.50,6],[12,128,8,1,3,4,2,7,-5,'12.5','37.5','50.0',0.25,0.88,6],[13,162,9,1,3,5,2,8,-6,'11.1','33.3','55.6',0.22,0.89,6],[14,165,8,0,5,3,4,7,-3,'0.0','62.5','37.5',0.50,0.88,5],[15,139,9,1,2,6,4,9,-5,'11.1','22.2','66.7',0.44,1.00,5],[16,1080,8,0,4,4,1,5,-4,'0.0','50.0','50.0',0.13,0.63,4],[17,490,9,0,4,5,2,8,-6,'0.0','44.4','55.6',0.22,0.89,4],[18,132,8,1,1,6,4,13,-9,'12.5','12.5','75.0',0.50,1.63,4]];
var lastUpdateTime = '2017-01-26 10:46:17';
isConference=false;


exports.arrLeague = arrLeague