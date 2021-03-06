import {Component, SimpleChanges, OnChanges} from '@angular/core';
import { parseResponseInNewArray, patternSorting } from '../../../assets/helpers';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(public router: Router) {}
  public testResponse = [
    {
      'score': 17.48428,
      'show': {
        'id': 139,
        'url': 'http://www.tvmaze.com/shows/139/girls',
        'name': 'Girls',
        'type': 'Scripted',
        'language': 'English',
        'genres': [
          'Drama',
          'Romance'
        ],
        'status': 'Ended',
        'runtime': 30,
        'premiered': '2012-04-15',
        'officialSite': 'http://www.hbo.com/girls',
        'schedule': {
          'time': '22:00',
          'days': [
            'Sunday'
          ]
        },
        'rating': {
          'average': 6.7
        },
        'weight': 94,
        'network': {
          'id': 8,
          'name': 'HBO',
          'country': {
            'name': 'United States',
            'code': 'US',
            'timezone': 'America/New_York'
          }
        },
        'webChannel': null,
        'externals': {
          'tvrage': 30124,
          'thetvdb': 220411,
          'imdb': 'tt1723816'
        },
        'image': {
          'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
          'original': 'http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg'
        },
        'summary': '<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>',
        'updated': 1538265422,
        '_links': {
          'self': {
            'href': 'http://api.tvmaze.com/shows/139'
          },
          'previousepisode': {
            'href': 'http://api.tvmaze.com/episodes/1079686'
          }
        }
      }
    },
    {
      'score': 13.293832,
      'show': {
        'id': 32087,
        'url': 'http://www.tvmaze.com/shows/32087/chicken-girls',
        'name': 'Chicken Girls',
        'type': 'Scripted',
        'language': 'English',
        'genres': [],
        'status': 'Running',
        'runtime': 16,
        'premiered': '2017-09-05',
        'officialSite': 'https://www.youtube.com/playlist?list=PLVewHiZp3_LPhqzbcZFmS3iuDm9HymTsy',
        'schedule': {
          'time': '18:00',
          'days': [
            'Tuesday'
          ]
        },
        'rating': {
          'average': null
        },
        'weight': 91,
        'network': null,
        'webChannel': {
          'id': 274,
          'name': 'Brat',
          'country': {
            'name': 'United States',
            'code': 'US',
            'timezone': 'America/New_York'
          }
        },
        'externals': {
          'tvrage': null,
          'thetvdb': null,
          'imdb': null
        },
        'image': {
          'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/137/344365.jpg',
          'original': 'http://static.tvmaze.com/uploads/images/original_untouched/137/344365.jpg'
        },
        'summary': '<p>Rhyme and her friends — known by their \'ship name, "The Chicken Girls" — have been dancing together forever. But this year, everything\'s changing...</p>',
        'updated': 1539073804,
        '_links': {
          'self': {
            'href': 'http://api.tvmaze.com/shows/32087'
          },
          'previousepisode': {
            'href': 'http://api.tvmaze.com/episodes/1543407'
          }
        }
      }
    },
    {
      'score': 13.237321,
      'show': {
        'id': 23542,
        'url': 'http://www.tvmaze.com/shows/23542/good-girls',
        'name': 'Good Girls',
        'type': 'Scripted',
        'language': 'English',
        'genres': [
          'Drama',
          'Comedy',
          'Crime'
        ],
        'status': 'Running',
        'runtime': 60,
        'premiered': '2018-02-26',
        'officialSite': 'https://www.nbc.com/good-girls?nbc=1',
        'schedule': {
          'time': '22:00',
          'days': [
            'Monday'
          ]
        },
        'rating': {
          'average': 7
        },
        'weight': 92,
        'network': {
          'id': 1,
          'name': 'NBC',
          'country': {
            'name': 'United States',
            'code': 'US',
            'timezone': 'America/New_York'
          }
        },
        'webChannel': null,
        'externals': {
          'tvrage': null,
          'thetvdb': 328577,
          'imdb': 'tt6474378'
        },
        'image': {
          'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/141/354343.jpg',
          'original': 'http://static.tvmaze.com/uploads/images/original_untouched/141/354343.jpg'
        },
        'summary': '<p><b>Good Girls</b> follows three "good girl" suburban wives and mothers who suddenly find themselves in desperate circumstances and decide to stop playing it safe, and risk everything to take their power back.</p>',
        'updated': 1532345475,
        '_links': {
          'self': {
            'href': 'http://api.tvmaze.com/shows/23542'
          },
          'previousepisode': {
            'href': 'http://api.tvmaze.com/episodes/1425058'
          }
        }
      }
    },
    {
      'score': 13.0926695,
      'show': {
        'id': 525,
        'url': 'http://www.tvmaze.com/shows/525/gilmore-girls',
        'name': 'Gilmore Girls',
        'type': 'Scripted',
        'language': 'English',
        'genres': [
          'Drama',
          'Comedy',
          'Romance'
        ],
        'status': 'Ended',
        'runtime': 60,
        'premiered': '2000-10-05',
        'officialSite': null,
        'schedule': {
          'time': '21:00',
          'days': [
            'Tuesday'
          ]
        },
        'rating': {
          'average': 8.6
        },
        'weight': 88,
        'network': {
          'id': 5,
          'name': 'The CW',
          'country': {
            'name': 'United States',
            'code': 'US',
            'timezone': 'America/New_York'
          }
        },
        'webChannel': null,
        'externals': {
          'tvrage': 3683,
          'thetvdb': 76568,
          'imdb': 'tt0238784'
        },
        'image': {
          'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg',
          'original': 'http://static.tvmaze.com/uploads/images/original_untouched/4/11308.jpg'
        },
        'summary': '<p><b>Gilmore Girls</b> is a drama centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.</p>',
        'updated': 1538645969,
        '_links': {
          'self': {
            'href': 'http://api.tvmaze.com/shows/525'
          },
          'previousepisode': {
            'href': 'http://api.tvmaze.com/episodes/47639'
          }
        }
      }
    },
    {
      'score': 12.943599,
      'show': {
        'id': 6771,
        'url': 'http://www.tvmaze.com/shows/6771/the-powerpuff-girls',
        'name': 'The Powerpuff Girls',
        'type': 'Animation',
        'language': 'English',
        'genres': [
          'Comedy',
          'Action',
          'Science-Fiction'
        ],
        'status': 'Running',
        'runtime': 15,
        'premiered': '2016-04-04',
        'officialSite': 'https://www.cartoonnetwork.com/video/powerpuff-girls/index.html',
        'schedule': {
          'time': '17:30',
          'days': [
            'Sunday'
          ]
        },
        'rating': {
          'average': null
        },
        'weight': 87,
        'network': {
          'id': 11,
          'name': 'Cartoon Network',
          'country': {
            'name': 'United States',
            'code': 'US',
            'timezone': 'America/New_York'
          }
        },
        'webChannel': null,
        'externals': {
          'tvrage': null,
          'thetvdb': 307473,
          'imdb': 'tt4718304'
        },
        'image': {
          'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg',
          'original': 'http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg'
        },
        'summary': '<p>The city of Townsville may be a beautiful, bustling metropolis, but don\'t be fooled! There\'s evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who\'s who of evil, they show what it really means to "fight like a girl."</p>',
        'updated': 1537942865,
        '_links': {
          'self': {
            'href': 'http://api.tvmaze.com/shows/6771'
          },
          'previousepisode': {
            'href': 'http://api.tvmaze.com/episodes/1518399'
          },
          'nextepisode': {
            'href': 'http://api.tvmaze.com/episodes/1536459'
          }
        }
      }
    },
    {
      'score': 12.48676,
      'show': {
        'id': 27894,
        'url': 'http://www.tvmaze.com/shows/27894/three-girls',
        'name': 'Three Girls',
        'type': 'Scripted',
        'language': 'English',
        'genres': [
          'Drama'
        ],
        'status': 'Ended',
        'runtime': 60,
        'premiered': '2017-05-16',
        'officialSite': 'http://www.bbc.co.uk/programmes/b08rgd5n',
        'schedule': {
          'time': '21:00',
          'days': [
            'Tuesday',
            'Wednesday',
            'Thursday'
          ]
        },
        'rating': {
          'average': 9.5
        },
        'weight': 58,
        'network': {
          'id': 12,
          'name': 'BBC One',
          'country': {
            'name': 'United Kingdom',
            'code': 'GB',
            'timezone': 'Europe/London'
          }
        },
        'webChannel': null,
        'externals': {
          'tvrage': null,
          'thetvdb': 327999,
          'imdb': 'tt6835252'
        },
        'image': {
          'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/138/347202.jpg',
          'original': 'http://static.tvmaze.com/uploads/images/original_untouched/138/347202.jpg'
        },
        'summary': '<p><b>Three Girls</b> tells the true story of three of the children who were victims in the 2012 grooming and sex trafficking case in Rochdale.</p><p>Holly is new to Rochdale and keen to make friends and fit in. She finds herself drawn into a world she cannot escape, despite her pleas for help. It\'s a world that is all too familiar to sexual health worker Sara, who has been recording and reporting cases of child abuse for years.</p>',
        'updated': 1513509678,
        '_links': {
          'self': {
            'href': 'http://api.tvmaze.com/shows/27894'
          },
          'previousepisode': {
            'href': 'http://api.tvmaze.com/episodes/1164038'
          }
        }
      }
    },
    {
      'score': 12.38908,
      'show': {
        'id': 722,
        'url': 'http://www.tvmaze.com/shows/722/the-golden-girls',
        'name': 'The Golden Girls',
        'type': 'Scripted',
        'language': 'English',
        'genres': [
          'Drama',
          'Comedy'
        ],
        'status': 'Ended',
        'runtime': 30,
        'premiered': '1985-09-14',
        'officialSite': null,
        'schedule': {
          'time': '21:00',
          'days': [
            'Saturday'
          ]
        },
        'rating': {
          'average': 8.2
        },
        'weight': 79,
        'network': {
          'id': 1,
          'name': 'NBC',
          'country': {
            'name': 'United States',
            'code': 'US',
            'timezone': 'America/New_York'
          }
        },
        'webChannel': null,
        'externals': {
          'tvrage': 5820,
          'thetvdb': 71292,
          'imdb': 'tt0088526'
        },
        'image': {
          'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/6/15097.jpg',
          'original': 'http://static.tvmaze.com/uploads/images/original_untouched/6/15097.jpg'
        },
        'summary': '<p><b>The Golden Girls</b> follows four South Florida seniors sharing a house, their dreams, and a whole lot of cheesecake. Bright, promiscuous, clueless, and hilarious, these lovely mismatched ladies form the perfect circle of friends.</p>',
        'updated': 1525015596,
        '_links': {
          'self': {
            'href': 'http://api.tvmaze.com/shows/722'
          },
          'previousepisode': {
            'href': 'http://api.tvmaze.com/episodes/64040'
          }
        }
      }
    },
    {
      'score': 12.223595,
      'show': {
        'id': 32369,
        'url': 'http://www.tvmaze.com/shows/32369/the-nice-girls',
        'name': 'The Nice Girls',
        'type': 'Scripted',
        'language': 'English',
        'genres': [
          'Drama',
          'Action',
          'Crime'
        ],
        'status': 'In Development',
        'runtime': 60,
        'premiered': null,
        'officialSite': null,
        'schedule': {
          'time': '',
          'days': []
        },
        'rating': {
          'average': null
        },
        'weight': 32,
        'network': {
          'id': 4,
          'name': 'FOX',
          'country': {
            'name': 'United States',
            'code': 'US',
            'timezone': 'America/New_York'
          }
        },
        'webChannel': null,
        'externals': {
          'tvrage': null,
          'thetvdb': null,
          'imdb': null
        },
        'image': null,
        'summary': '<p><strong>The Nice Girls</strong> is a contemporary female take on the Joel Silver-produced 2016 feature film The Nice Guys.</p>',
        'updated': 1506676116,
        '_links': {
          'self': {
            'href': 'http://api.tvmaze.com/shows/32369'
          }
        }
      }
    },
    {
      'score': 11.722996,
      'show': {
        'id': 33320,
        'url': 'http://www.tvmaze.com/shows/33320/derry-girls',
        'name': 'Derry Girls',
        'type': 'Scripted',
        'language': 'English',
        'genres': [
          'Comedy'
        ],
        'status': 'Running',
        'runtime': 30,
        'premiered': '2018-01-04',
        'officialSite': 'http://www.channel4.com/programmes/derry-girls',
        'schedule': {
          'time': '22:00',
          'days': [
            'Thursday'
          ]
        },
        'rating': {
          'average': 7.3
        },
        'weight': 96,
        'network': {
          'id': 45,
          'name': 'Channel 4',
          'country': {
            'name': 'United Kingdom',
            'code': 'GB',
            'timezone': 'Europe/London'
          }
        },
        'webChannel': null,
        'externals': {
          'tvrage': null,
          'thetvdb': 338903,
          'imdb': 'tt7120662'
        },
        'image': {
          'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/141/353703.jpg',
          'original': 'http://static.tvmaze.com/uploads/images/original_untouched/141/353703.jpg'
        },
        'summary': '<p>16-year-old Erin Quinn lives with her uncompromising mother, her long-suffering father and the fearsome ‘Granda Joe\', a man whose love for his daughters and granddaughters is surpassed only by his contempt for his son-in-law.</p><p>It\'s the early 90s, and Erin is used to seeing her country on the nightly news and speaking in acronyms (The IRA, The UDA, The RUC). This is a time of armed police in armoured Land Rovers and British Army check points. But it\'s also the time of Murder She Wrote, The Cranberries, MJ and Lisa Marie, Doc Martens, bomber jackets, The X Files, Nirvana and Wayne\'s World. And while The Troubles may hang over her home town, Erin has troubles of her own</p>',
        'updated': 1518470029,
        '_links': {
          'self': {
            'href': 'http://api.tvmaze.com/shows/33320'
          },
          'previousepisode': {
            'href': 'http://api.tvmaze.com/episodes/1370222'
          }
        }
      }
    },
    {
      'score': 11.371192,
      'show': {
        'id': 1073,
        'url': 'http://www.tvmaze.com/shows/1073/bomb-girls',
        'name': 'Bomb Girls',
        'type': 'Scripted',
        'language': 'English',
        'genres': [
          'Drama',
          'Romance',
          'War'
        ],
        'status': 'Ended',
        'runtime': 60,
        'premiered': '2012-01-04',
        'officialSite': null,
        'schedule': {
          'time': '20:00',
          'days': [
            'Monday'
          ]
        },
        'rating': {
          'average': 8.5
        },
        'weight': 0,
        'network': {
          'id': 67,
          'name': 'Global',
          'country': {
            'name': 'Canada',
            'code': 'CA',
            'timezone': 'America/Halifax'
          }
        },
        'webChannel': null,
        'externals': {
          'tvrage': 30600,
          'thetvdb': 254378,
          'imdb': 'tt1955311'
        },
        'image': {
          'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/7/17549.jpg',
          'original': 'http://static.tvmaze.com/uploads/images/original_untouched/7/17549.jpg'
        },
        'summary': '<p>Set in the 1940s, <b>Bomb Girls</b> tells the remarkable stories of the women who risked their lives in a munitions factory building bombs for the Allied forces fighting on the European front. The series delves into the lives of these exceptional women – peers, friends and rivals – who find themselves thrust into new worlds and changed profoundly as they are liberated from their home and social restrictions.</p>',
        'updated': 1483430381,
        '_links': {
          'self': {
            'href': 'http://api.tvmaze.com/shows/1073'
          },
          'previousepisode': {
            'href': 'http://api.tvmaze.com/episodes/108024'
          }
        }
      }
    }
  ];
  testArr = parseResponseInNewArray(this.testResponse);

  onClickOnTable = (event) => {
    // if (event.target.dataset.string) {
    //   const elName = event.target;
    //
    //   !this.nameSort
    //     ? elName.classList.add('sorted-up')
    //     : elName.classList.remove('sorted-up');
    // }
    // -----------------------------------------------------------


    // if (event.target.dataset.num) {
    //   const elRating = event.target;
    //
    //   !this.ratingSort
    //     ? elRating.classList.add('sorted-up')
    //     : elRating.classList.remove('sorted-up');
    // }
    // -----------------------------------------------------------


    if (event.target.parentElement.classList.contains('table__row-data')) {
      const id = event.target.parentElement.id;
      this.router.navigate([`/details/${id}`]);
      return;
    }
  }
  // -------------------------------- END ---------------------------------

  // ngOnChanges(changes: SimpleChanges) {
  // handleSortName() {
  //   patternSorting(
  //     this.props.state.data.dataParsedInArr,
  //     this.state.nameSort,
  //     'str',
  //     1
  //     );
  //   this.setState({
  //     nameSort: !this.state.nameSort,
  //     ratingSort: false
  //   })
  // };
  // // -------------------------------- END ---------------------------------
  //
  //
  // public handleSortRating() {
  //   this.props.onSetDataParsed(
  //     patternSorting(
  //       this.props.state.data.dataParsedInArr,
  //       this.state.ratingSort,
  //       'num',
  //       5
  //     ));
  //
  //   this.setState({
  //     ratingSort: !this.state.ratingSort,
  //     nameSort: false
  //   });
  // }
  // }
}








//
//   // desserts: Dessert[] = [
//   //   {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
//   //   {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
//   //   {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
//   //   {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
//   //   {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
//   // ];
//   sortedData: any[];
//
//   constructor() {
//     this.sortedData = this.testArr.slice();
//   }
//
//   sortData(sort: Sort) {
//     const data = this.testArr.slice();
//     if (!sort.active || sort.direction === '') {
//       this.sortedData = data;
//       return;
//     }
//
//     this.sortedData = data.sort((a, b) => {
//       const isAsc = sort.direction === 'asc';
//       switch (sort.active) {
//         case 'name': return compare(a.name, b.name, isAsc);
//         // case 'calories': return compare(a.calories, b.calories, isAsc);
//         // case 'fat': return compare(a.fat, b.fat, isAsc);
//         // case 'carbs': return compare(a.carbs, b.carbs, isAsc);
//         case 'rating': return compare(a.rating, b.rating, isAsc);
//         default: return 0;
//       }
//     });
//   }
// }
//
// function compare(a: number | string, b: number | string, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
