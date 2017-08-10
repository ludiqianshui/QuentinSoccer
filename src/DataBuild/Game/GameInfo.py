'''
Created on 3 Aug 2017

@author: qsong
'''
import unittest
import urllib2
from bs4 import BeautifulSoup

class GameInfo(object):
    '''
    This module provides League related function
    '''
    game_base_url = "http://zq.win007.com/analysis/{}.htm"
        
    def __init__(self):
        '''
        Constructor
        '''
        return
    
    def __del__(self):
        return
        
    def get_game_info_by_id (self, game_id):
        game_info_url = self.game_base_url.format(game_id)
        print game_info_url
        opener = urllib2.build_opener()
        headers = {  'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:10.0.1) Gecko/20100101 Firefox/10.0.1',}
        opener.addheaders = headers.items()
        url_data = opener.open(game_info_url,timeout=10).read()
        soup = BeautifulSoup(url_data)
        odd_table_body = soup.find_all("script")
        print odd_table_body    
        for script_in_body in odd_table_body:
            if script_in_body.text.find("function show_info") != -1 :
                print script_in_body
                game_file = open("../../../data/game/game_info"+str(game_id)+".js", 'w+')
                game_file.write(script_in_body.text.encode('ascii', 'ignore').decode('ascii'))
                game_file.close()
        return
    

class Test(unittest.TestCase):

    def setUp(self):
        self.test_obj = GameInfo()

    def tearDown(self):
        self.test_obj = None
        return

    def test_get_game_info(self):
        self.test_obj.get_game_info_by_id(1365286)
        # self.test_obj.get_goldenbet()
        return


        
        