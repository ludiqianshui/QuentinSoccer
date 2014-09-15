#import json
import unittest
import urllib2
import datetime
from datetime import date

PROSOCCERStartYear = 2013
PROSOCCERStartMonth = 03
PROSOCCERStartDay = 05

BACKUP_FLAG = True

class prosoccer_data_dump(object):
    
    UrlTemplate= "http://www.prosoccer.gr/en/{}/{}/soccer-predictions-{}-{}-{}.html"
    
    OneGameInfoDic = {'GameTime': '', 'GameLeague':'', 'GameHost':'', 'GameGuest':'', 
                'possibility_3': '', 'possibility_1':'','possibility_1':'', 'TIPS':'', 
                'ODD_3':'', 'ODD_1':'', 'ODD_0':'', 
                'PredictScore_1': '', 'PredictScore_2': '', 
                'PossibilityUnder2.5': '', 'PossibilityOver2.5': '',
                'FinalResult':'' }
    
    GameInfoList = []
    
    def __init__(self):
        return

    def get_prosoccer_data (self, year, month, date):
       
        url = self.UrlTemplate.format(year, month, year, month, date)
        print url
        
        response = urllib2.urlopen(url);
        page_data = response.read()
        response.close()
        return page_data

    def daterange(self, start_date, end_date):
        for n in range(int ((end_date - start_date).days)):
            yield start_date + datetime.timedelta(n)

    def get_update_prosoccer_data_before_today (self):
        today = date.today()
      
        start_date = date(PROSOCCERStartYear, PROSOCCERStartMonth, PROSOCCERStartDay)
        
        for single_date in self.daterange(start_date, today):
            Month = single_date.strftime("%m")
            Day = single_date.strftime("%d")
            
            test_team_result = self.get_prosoccer_data(single_date.year, Month, Day)
            
            if self.parse_prosoccer_html(test_team_result) == True:
                print "parse data correct and saved in the DB"
                            
            if BACKUP_FLAG == True: 
                file_name = '../UsefulData/HTMLFiles/{}_{}_{}.html'.format(single_date.year, Month, Day)
                soccer_date_file = open(file_name, 'w')
                soccer_date_file.write(test_team_result)
                soccer_date_file.close()
                print single_date
            
        return test_team_result

    def parse_prosoccer_html(self, prosoccer_html):
        
        self.GameInfoList 
        self.GameInfo
        
        return True
        

    def get_prosoccer_data_only_today(self):

        today = date.today()
        test_team_result = self.get_prosoccer_data(today.year, today.strftime("%m"), today.strftime("%d"))
        
        return test_team_result
    
class Test(unittest.TestCase):

#     def test_team_data_by_league(self):
#         pre_predictz = prosoccer_data_dump()
#         test_team_result = pre_predictz.get_prosoccer_data(2013,12,12)
#  
#         print test_team_result
#         return 

    def test_prosoccer_data_before_today(self):
        pre_predictz = prosoccer_data_dump()
        test_team_result = pre_predictz.get_update_prosoccer_data_before_today()
        
        print test_team_result
        return
#     def test_prosoccer_only_today(self):
#         pre_predictz = prosoccer_data_dump()
#         test_team_result = pre_predictz.get_prosoccer_data_only_today()
#  
#         print test_team_result
#         return
