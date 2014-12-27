'''

elem = browser.find_element_by_id("yesBtn").click()  # Get ECT time
cookiesss = browser.get_cookies()

'''

import time
import unittest

from bs4 import BeautifulSoup
from selenium import webdriver


GameInfo = {'GameTime': '', 'GameLeague':'', 'GameHost':'', 'GameGuest':'', 
                'WilliamhillGameLink':'',
                'FinalScore':''}


# from DataDump.data_dump import prosoccer_data_dump
class InPlayGameBySelenium (object):
    
    InPlayGameURL = "http://sports.williamhill.com/bet/en-gb/betting/y/5/tm/0/Football.html"
    
    def __init__(self):
        self.browser = webdriver.Firefox()
        
    def __del__(self):
        self.browser.quit()
        
    def get_game_list (self):

        self.browser.get(self.InPlayGameURL)
        
        self.browser.find_element_by_id("yesBtn").click()  # Get ECT time
        time.sleep(5)
        self.browser.find_element_by_id("oddsSelect").send_keys("Decimal")
        self.browser.find_element_by_id("changeOrder").send_keys("Time")
        
        time.sleep(10)
        page_data = self.browser.page_source.encode('ASCII', 'ignore')
        """       
            save the info in a html file, this part can be removed.
        """
        file_name = 'GameToday.html'
        soccer_date_file = open(file_name, 'w')
        soccer_date_file.write(page_data)
        soccer_date_file.close()
        
        soup=BeautifulSoup(page_data)
# get the table content by the given tag of anyid for the talble id
        GameContent = soup.find_all('tr', {"class": "rowOdd" }) 
#         GameContent1 = soup.find(id="rowOdd")
        print len(GameContent)

        return 
    
    
class Test(unittest.TestCase):

    def test_game_list(self):
        in_play_game = InPlayGameBySelenium()
        in_play_game.get_game_list()
  
#         print test_team_result
        return 

