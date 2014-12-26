# from test.test_xmlrpc import URL
import unittest
import urllib2

from bs4 import BeautifulSoup

GameInfo = {'GameTime': '', 'GameLeague':'', 'GameHost':'', 'GameGuest':'', 
                'WilliamhillGameLink':'',
                'FinalScore':''}


# from DataDump.data_dump import prosoccer_data_dump
class InPlayGame (object):
    
    InPlayGameURL = "http://sports.williamhill.com/bet/en-gb/betting/y/5/tm/1/Football.html"
#     InPlayGameURL = "http://sports.williamhill.com/bet/en-gb/betting/e/6986763/ENPPI-v-El-Zamalek.html"
    
    def __init__(self):
        return
    
    def get_game_list (self):
        
        opener = urllib2.build_opener()
        opener.addheaders.append(('Cookie', 'cust_prefs=en|DECIMAL|form|TYPE|PRICE|||0|SB|0|0||0|en|0|TIME|TYPE|0|5|A|0||0|1|0||TYPE|'))
        response = opener.open(self.InPlayGameURL)
        page_data = response.read()
        response.close()
                
        """       
            save the info in a html file, this part can be removed.
        """
        file_name = 'GameToday.html'
        soccer_date_file = open(file_name, 'w')
        soccer_date_file.write(page_data)
        soccer_date_file.close()
        
#        parse the html data to get game list in the page, important tag is tr with class name "rowOdd"
        soup=BeautifulSoup(page_data)
# get the table content by the given tag of anyid for the talble id
        GameContent = soup.find_all('tr', {"class": "rowOdd" }) 
#         GameContent1 = soup.find(id="rowOdd")
        print len(GameContent)

        return page_data
    

class Test(unittest.TestCase):

    def test_game_list(self):
        in_play_game = InPlayGame()
        in_play_game.get_game_list()
  
#         print test_team_result
        return 
