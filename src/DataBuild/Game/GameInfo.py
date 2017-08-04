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
        url_data = urllib2.urlopen(game_info_url)
        soup = BeautifulSoup(url_data)
        odd_table_body = soup.find_all("script")
        print odd_table_body    
        
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


        
        