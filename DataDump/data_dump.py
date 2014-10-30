#import json
import unittest
import urllib2
import datetime
from datetime import date

from bs4 import BeautifulSoup

import xml.etree.ElementTree as ET

PROSOCCERStartYear = 2013
PROSOCCERStartMonth = 03
PROSOCCERStartDay = 05

HTMLFILE_BACKUP_FLAG = True
# HTMLFILE_BACKUP_FLAG = False

class prosoccer_data_dump(object):
    
    UrlTemplate= "http://www.prosoccer.gr/en/{}/{}/soccer-predictions-{}-{}-{}.html"
    
    GameInfoDic = {'GameTime': '', 'GameLeague':'', 'GameHost':'', 'GameGuest':'', 
                'PredictPossibility_3': '', 'PredictPossibility_1':'','PredictPossibility_0':'', 'TIPS':'', 
                'ODD_3':'', 'ODD_1':'', 'ODD_0':'', 
                'PredictScore_1': '', 'PredictScore_2': '', 
                'PredictPossibilityUnder2.5': '', 'PredictPossibilityOver2.5': '',
                'FinalResult':'' }
    
    GameInfoList = []
    
    FlagGameFinished = True 
    
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
                            
            if HTMLFILE_BACKUP_FLAG == True: 
                file_name = '../UsefulData/HTMLFiles/{}_{}_{}.html'.format(single_date.year, Month, Day)
                soccer_date_file = open(file_name, 'w')
                soccer_date_file.write(test_team_result)
                soccer_date_file.close()
                print single_date
            
        return test_team_result

    def parse_prosoccer_html(self, prosoccer_html_str):
        
        soup=BeautifulSoup(prosoccer_html_str)
        
# get the table content by the given tag of anyid for the talble id
        TableContent = soup.find("table", {"id": "anyid"} ) 
        if TableContent.__str__() == "":
            return False
        print TableContent
        tabel_root = ET.fromstring(TableContent.__str__())
        
# get content of tr(each tr is a each game info) and td (each td is a item of the game info)
        for tr_tag in tabel_root:
            tr_class_name = tr_tag.get('class')
            if tr_tag.tag == "tr" and (tr_class_name == "f1" or tr_class_name == "f2") :
                td_tag_list = tr_tag.getchildren()
                # get game time
                self.GameInfoDic['GameTime'] = td_tag_list[0].text
                # get game type
                self.GameInfoDic['GameLeague'] = str(td_tag_list[1].getchildren()[0].tail).replace('\xc2\xa0','')
                # get GameHost
                self.GameInfoDic['GameHost'] = str(td_tag_list[2].getchildren()[0].text).split('-')[0].replace(' ','')
                # get GameGuest
                self.GameInfoDic['GameGuest'] = str(td_tag_list[2].getchildren()[0].text).split('-')[1].replace(' ','')

                
                # get finished game score 
                if td_tag_list[14].text == ' - ':
                    self.GameInfoDic['FinalResult'] = ''
                    self.FlagGameFinished = False
                else: 
                    self.GameInfoDic['FinalResult'] = td_tag_list[14].text
                    self.FlagGameFinished = True
               
                # if the game finished      
                if self.FlagGameFinished == True:
                    # get predict possibility win
                    self.GameInfoDic['PredictPossibility_3'] = td_tag_list[3].text
                    # get predict possibility draw
                    self.GameInfoDic['PredictPossibility_1'] = td_tag_list[4].text
                    # get predict possibility lose
                    self.GameInfoDic['PredictPossibility_0'] = td_tag_list[5].text
                    #get tips
                    self.GameInfoDic['TIPS'] = 
                    
                    
                # if the game not finished
                if self.FlagGameFinished == False:
                    # get predict possibility win
                    number_1st_digit = td_tag_list[3].getchildren()[0].attrib['class'].split('_')[-1]
                    number_2st_digit = td_tag_list[3].getchildren()[1].attrib['class'].split('_')[-1]
                    self.GameInfoDic['PredictPossibility_3'] = int(number_1st_digit + number_2st_digit)
                    # get predict possibility draw
                    number_1st_digit = td_tag_list[4].getchildren()[0].attrib['class'].split('_')[-1]
                    number_2st_digit = td_tag_list[4].getchildren()[1].attrib['class'].split('_')[-1]
                    self.GameInfoDic['PredictPossibility_1'] = int(number_1st_digit + number_2st_digit)
                    # get predict possibility lose
                    number_1st_digit = td_tag_list[5].getchildren()[0].attrib['class'].split('_')[-1]
                    number_2st_digit = td_tag_list[5].getchildren()[1].attrib['class'].split('_')[-1]
                    self.GameInfoDic['PredictPossibility_0'] = int(number_1st_digit + number_2st_digit)
                    #get tips
                    self.GameInfoDic['TIPS'] = td_tag_list[5].text
                
                
                
                
                print self.GameInfoDic
             
           
#         self.GameInfoList 
#         self.GameInfo
#         
        return True
        

    def get_prosoccer_data_only_today(self):

        today = date.today()
        TodayInfo = self.get_prosoccer_data(today.year, today.strftime("%m"), today.strftime("%d"))
        RetValue = False
        
        if self.parse_prosoccer_html(TodayInfo) == True:
            print "parse data correct and saved in the DB"
            
            RetValue = True

        return RetValue
    
class Test(unittest.TestCase):

#     def test_team_data_by_league(self):
#         pre_predictz = prosoccer_data_dump()
#         test_team_result = pre_predictz.get_prosoccer_data(2013,12,12)
#  
#         print test_team_result
#         return 
# 
#     def test_parse_prosoccer_html(self):
#         pre_predictz = prosoccer_data_dump()
#         test_team_result = pre_predictz.get_update_prosoccer_data_before_today()
#          
#         print test_team_result
#         return
    
#     def test_prosoccer_data_before_today(self):
#         pre_predictz = prosoccer_data_dump()
#         test_team_result = pre_predictz.get_update_prosoccer_data_before_today()
#         
#         print test_team_result
#         return
    
    def test_prosoccer_only_today(self):
        pre_predictz = prosoccer_data_dump()
        RetValue = pre_predictz.get_prosoccer_data_only_today()
   
        print RetValue
        return
