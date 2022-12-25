import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotifyCoreApi = createApi({
  reducerPath: 'spotifyCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spotify.com/v1',
    prepareHeaderse: (headers) => {
      headers.set('Authorization', 'Bearer BQB9MYlD6pR0wBMfQiVuNEEbY2yOsL9L4DlnFB9LRtTzdnXzwK35f_nJyOIlcbfsZQZH9BDeL9NxXmb0LxpiPvSEeXNbn2ZMxfE2zQmDxy4jIJ2A94A1bMrDcbqcSu8OniX5N9DfO2Cpr742AZC6X5X4vncGkNIL31BT81lTd2K_hsqwlm3bbXVZBaxCG88')
      return headers
    }
  }),
  endpoints:(builder) => ({
    getCurrentUserPlaylist: builder.query({ query: '/me/playlists'})
  })
})

export const {
  useGetCurrentUserPlaylist
} = spotifyCoreApi