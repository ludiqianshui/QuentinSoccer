"""
    This module provides Game related function
"""
import unittest
import urllib2
from bs4 import BeautifulSoup
import datetime
import json

class Game(object):

    game_odd_base_url = "http://vip.win007.com/changeDetail/{}.aspx?id={}&companyID={}"
    
    def get_game_odd (self, odd_type, game_id,company_id):
        self.get_game_odd_by_time(odd_type, game_id,company_id)
        self.get_game_odd_by_oddchange(odd_type, game_id,company_id)
        return
    
    def get_game_odd_by_time (self, odd_type, game_id,company_id):
        game_odd_url = self.game_odd_base_url.format(odd_type, game_id, company_id)
        page_content = urllib2.urlopen(game_odd_url)
        if page_content.code == 200:
            soup = BeautifulSoup(page_content)
            time_odd_table_body = soup.find_all("span", id="odds")
            if len(time_odd_table_body) == 0:
                return
            time_odd_item_list  = time_odd_table_body[0].find_all("tr", bgcolor="#ffffff")
            print ("gameid {} has {}".format(game_id,len(time_odd_item_list)))
            for odd_item in time_odd_item_list:
                odd_item_time =     odd_item.find_all("td")[0].next#time
                odd_item_type =   odd_item.find_all("td")[1].next  #odd type
                odd_item_up_rate =  odd_item.find_all("td")[2].text    #shangpan shuiwei  
                odd_item_down_rate =   odd_item.attrs['title'].split(':')[1]    #xiapan shuiwei
     
    def get_game_odd_by_oddchange(self, odd_type, game_id, company_id):
        game_odd_url = self.game_odd_base_url.format(odd_type, game_id, company_id)
        page_content = urllib2.urlopen(game_odd_url)
        if page_content.code == 200:
            soup = BeautifulSoup(page_content)
            change_odd_table_body = soup.find_all("span", id="odds2")
            if len(change_odd_table_body) == 0:
                return
            change_odd_item_list  = change_odd_table_body[0].find_all("tr")
            print ("gameid {} has {}".format(game_id, len(change_odd_item_list)))
            for odd_item in change_odd_item_list:
                print len(odd_item.find_all("td"))
                if len(odd_item.find_all("td")) < 7:
                    continue
                odd_item_game_time = odd_item.find_all("td")[0].text #game time
                odd_item_current_score = odd_item.find_all("td")[1].text #score
                odd_item_up_rate = odd_item.find_all("td")[2].text #shangpan shuiwei
                odd_item_type = odd_item.find_all("td")[3].text # odd type
                odd_item_down_rate = odd_item.find_all("td")[4].text #xiapanshuiwei
                odd_item_time = odd_item.find_all("td")[5].text #time
                odd_item_state = odd_item.find_all("td")[6].text
                # print odd_item_game_time, odd_item_current_score, odd_item_up_rate, odd_item_type, odd_item_down_rate, odd_item_time, odd_item_state
        return

    def get_daily_game_odd(self):
        time_now = datetime.datetime.now()
        time_now = time_now.strftime('%Y-%m-%d')
        self._get_game_odd_per_date(time_now)
        return

    def _get_game_odd_per_date(self, date_str):
        with open("../../data/game/daily_game_info.json", 'r') as data_file:
            data = json.load(data_file)
        game_id_list = data[date_str]
        print  date_str, len(game_id_list), type(game_id_list)
        for game_id in game_id_list:
            self.get_game_odd("handicap", game_id, "3")

        return
    
class Test(unittest.TestCase):

    def setUp(self):
        self.test_obj = Game()

    def tearDown(self):
        self.test_obj = None
        return

    def test_get_game_odd(self):
        # self.test_obj.get_game_odd("handicap", "1472351", "3")
        # self.test_obj.get_goldenbet()
        return

    def test_get_today_game_odd(self):
        self.test_obj.get_daily_game_odd()
        return
#     def test_download_season_league_all(self):
#         league_id_list = self.test_obj.league_id_list
#         season_list = self.test_obj.season_list
#         self.test_obj.download_season_league_all(league_id_list, season_list)
#         return True
