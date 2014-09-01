#import json
import unittest
import urllib2
#import time
from datetime import date

PROSOCCERStartYear = 2013
PROSOCCERStartMonth = 03
PROSOCCERStartYear = 05


class prosoccer_data_dump(object):
    
    url_template= "http://www.prosoccer.gr/en/{}/{}/soccer-predictions-{}-{}-{}.html"
    
    def __init__(self):
        return

    def get_prosoccer_data (self, year, month, date):
       
        url = self.url_template.format(year, month, year, month, date)
        print url
#        url = "www.google.com"
        
        response = urllib2.urlopen(url);
        page_data = response.read()
        response.close()
        return page_data

    def get_update_prosoccer_data_before_today (self):
        today = date.today()
        
        
        Month = today.strftime("%m")
        Day = today.strftime("%d")
       
        test_team_result = self.get_prosoccer_data(today.year, Month, Day)
        print test_team_result
        return



    
class Test(unittest.TestCase):

#     def test_team_data_by_league(self):
#         pre_predictz = prosoccer_data_dump()
#         test_team_result = pre_predictz.get_prosoccer_data(2013,12,12)
#  
#         print test_team_result
#         return 

    def test_prosoccer_data(self):
        pre_predictz = prosoccer_data_dump()
        test_team_result = pre_predictz.get_update_prosoccer_data_before_today()
 
        print test_team_result
        return
