'''

elem = browser.find_element_by_id("yesBtn").click()  # Get ECT time
cookiesss = browser.get_cookies()

'''

import unittest

from selenium import webdriver
from Williamhill import Williamhill

GameInfo = {'GameTime': '', 'GameLeague':'', 'GameHost':'', 'GameGuest':'', 
                'WilliamhillGameLink':'',
                'FinalScore':''}


# from DataDump.data_dump import prosoccer_data_dump
class InPlayGameBySelenium (object):
    
    InPlayGameURL = "http://sports.williamhill.com/bet/en-gb/betting/y/5/tm/0/Football.html"
    
    def __init__(self):
        self.browser = webdriver.Firefox()
        self.williamhill_instance = Williamhill()
        
    def __del__(self):
        self.browser.quit()
        
    def get_game_list (self):

        self.williamhill_instance.get_game_list("rowLive")
        return 
    
    
class Test(unittest.TestCase):

    def test_game_list(self):
        in_play_game = InPlayGameBySelenium()
        in_play_game.get_game_list()
  
#         print test_team_result
        return 

