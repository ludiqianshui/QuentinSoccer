"""
    This module provides League related function
"""

import unittest
import urllib2
from selenium import webdriver
class League(object):
    """
        This module provides Team related function
    """
    win007_league_base_url = "http://zq.win007.com/cn/League/{}{}.html"

    def __init__(self):
        return

    def __del__(self):
        return

    def get_win007_league_page (self,  league_id , season_id = ""):


        league_url = self.win007_league_base_url.format(season_id, league_id)
        league_driver = webdriver.Chrome()
        league_driver.get(league_url)
        league_elem = league_driver.find_element_by_class_name("tdsolid")
        print  league_elem
        return

class Test(unittest.TestCase):

    def setUp(self):
        self.test_obj = League()

    def tearDown(self):
        self.test_obj = None
        return

    def test_get_win007_league_page(self):
        self.test_obj.get_win007_league_page(8, "2015-2016/")

        return True
