"""
    This module provides League related function
"""

import unittest

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

    def get_win007_league_page(self, league_id, season_id=""):

        league_url = self.win007_league_base_url.format(season_id, league_id)

        league_driver = webdriver.Chrome()
        league_driver.get(league_url)
        league_elem = league_driver.find_element_by_class_name("tdsolid")
        tr1 = league_elem.find_element_by_xpath('tr[1]')
        return

    def get_goldenbet(self):
        url = "http://www.goldenbet.com/en/"
        league_driver = webdriver.Chrome()
        league_driver.get(url)
        league_elem = league_driver.find_element_by_xpath(
            '//*[@id="tipster_top_div"]/div[5]/div/table/tbody'
        )
        print league_elem
        return


class Test(unittest.TestCase):

    def setUp(self):
        self.test_obj = League()

    def tearDown(self):
        self.test_obj = None
        return

    def test_get_win007_league_page(self):
        self.test_obj.get_win007_league_page(8, "2015-2016/")
        # self.test_obj.get_goldenbet()

        return True
