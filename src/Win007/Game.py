"""
    This module provides Game related function
"""
import unittest
import urllib2
from bs4 import BeautifulSoup

class Game(object):

    game_odd_base_url = "http://vip.win007.com/changeDetail/{}.aspx?id={}&companyID={}"
    
    def get_game_odd (self, odd_type, game_id,company_id):
        game_odd_url = self.game_odd_base_url.format(odd_type, game_id,company_id)
        page = urllib2.urlopen(game_odd_url)
#         self.get_game_odd_by_time(page)
        self.get_game_odd_by_change(page)
        return
    
    def get_game_odd_by_time (self, page_content):
        if page_content.code == 200:
            soup = BeautifulSoup(page_content)
            odd_table_body = soup.find_all("span", id="odds")
            odd_item_list  = odd_table_body[0].find_all("tr", bgcolor="#ffffff")
            print len(odd_item_list)
            for odd_item in odd_item_list:
                odd_item_time =     odd_item.find_all("td")[0].next#time
                odd_item_type =   odd_item.find_all("td")[1].next  #odd type
                odd_item_up_rate =  odd_item.find_all("td")[2].text    #shangpan shuiwei  
                odd_item_down_rate =   odd_item.attrs['title'].split(':')[1]    #xiapan shuiwei
                print odd_item_time
                print odd_item_type
                print odd_item_up_rate
                print odd_item_down_rate
     
    def get_game_odd_by_change(self, page_content):
        if page_content.code == 200:
            soup = BeautifulSoup(page_content)
            odd_table_body = soup.find_all("span", id="odds2")
            odd_item_list  = odd_table_body[0].find_all("tr")
            print len(odd_item_list)
            for odd_item in odd_item_list:
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
                print odd_item_game_time, odd_item_current_score, odd_item_up_rate, odd_item_type, odd_item_down_rate, odd_item_time, odd_item_state
        return
    
class Test(unittest.TestCase):

    def setUp(self):
        self.test_obj = Game()

    def tearDown(self):
        self.test_obj = None
        return

    def test_get_game_odd(self):
        self.test_obj.get_game_odd("handicap", "1258202", "3")
        # self.test_obj.get_goldenbet()
        return
#     def test_download_season_league_all(self):
#         league_id_list = self.test_obj.league_id_list
#         season_list = self.test_obj.season_list
#         self.test_obj.download_season_league_all(league_id_list, season_list)
#         return True
