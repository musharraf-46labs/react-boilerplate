/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError, setUser,updateUserDetails } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */


export function* handleGetUser() {
  // const [data]= action

  try {
    // const response = yield call(requestGetUser)
    yield delay(1000);
    const info = [
      {
        image:
          'https://readings.com.pk/Pages/Categories/BookImages/9780241314333.jpg',
        price: 30,
        id: 1,
      },
      {
        image:
          'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3463/34632582_so.jpg',
        price: 40,
        id: 2,
      },
      {
        image: 'https://m.media-amazon.com/images/I/41MaZ077hyL.jpg',
        price: 24,
        id: 3,
      },
      {
        image: 'https://m.media-amazon.com/images/I/51zfjwXFRrL._SY445_.jpg',
        price: 55,
        id: 4,
      },
      {
        image: 'https://m.media-amazon.com/images/I/81kJ69lDGIL._SL1500_.jpg',
        price: 19,
        id: 5,
      },
      {
        image:
          'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/The_Big_Bang_Theory_Season_2.jpg/220px-The_Big_Bang_Theory_Season_2.jpg',
        price: 31,
        id: 6,
      },
      {
        image:
          'https://cdn.hmv.com/r/w-640/hmv/files/5f/5fcdbd5a-10df-47ea-b310-68c62c6dd017.jpg',
        price: 39,
        id: 7,
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/I/A1qhBebbu6L.jpg',
        price: 79,
        id: 8,
      },
      {
        image:
          'https://kbimages1-a.akamaihd.net/34c5bfd3-a8d0-4500-a321-a1533c3af3f7/1200/1200/False/moby-dick-118.jpg',
        price: 19.1,
        id: 9,
      },
      {
        image:
          'https://www.linkshop.pk/image/cache/english/sapiens-500x500.jpg',
        price: 20,
        id: 10,
      },
      {
        image:
          'https://www.ynharari.com/wp-content/uploads/2017/01/homo_deus.png',
        price: 13.66,
        id: 11,
      },
      {
        image:
          'https://static-01.daraz.pk/p/b4fc820b002f3aafe992a261cd381a83.jpg',
        price: 14.95,
        id: 12,
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg',
        price: 11.47,
        id: 13,
      },
      {
        image:
          'https://www.onlinebooksoutlet.com/wp-content/uploads/2020/01/The-Clash-of-Civilizations-and-the-Remaking-of-World-Order-by-Samuel-P.-Huntington-OnlineBooksOutlet.jpeg',
        price: 30.41,
        id: 14,
      },
      {
        image:
          'https://www.onlinebooksoutlet.com/wp-content/uploads/2020/01/The-Clash-of-Civilizations-and-the-Remaking-of-World-Order-by-Samuel-P.-Huntington-OnlineBooksOutlet.jpeg',
        price: 32.41,
        id: 15,
      },
    ];

    //  const{data}= response
    // console.log('api1',data)
    // console.log(updated())
    yield put(setUser(info));
  } catch (error) {
    console.log(error);
  }
}



/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
 
  yield takeLatest('get', handleGetUser)
 /*yield takeLatest('update', updateInfo);*/
}
