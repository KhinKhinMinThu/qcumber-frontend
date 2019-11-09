export default function(
  state = {
    getErrMsg: null,
    clientData: [
      { name: "Ah Choo", gender: "Female", priority: "Yes" },
      { name: "Ang SK", gender: "Female", priority: "No" },
      { name: "Chee LC", gender: "Female", priority: "Yes" },
      { name: "Chew KF", gender: "Female", priority: "Yes" },
      { name: "Chin SF", gender: "Female", priority: "No" },
      { name: "Chua HC", gender: "Female", priority: "Yes" },
      { name: "Foo HK", gender: "Female", priority: "No" },
      { name: "Goh BC", gender: "Female", priority: "Yes" },
      { name: "Goh Siang G", gender: "Female", priority: "No" },
      { name: "Goh SK", gender: "Female", priority: "No" },
      { name: "Gopal", gender: "Female", priority: "No" },
      { name: "Guna", gender: "Female", priority: "Yes" },
      { name: "Hoo", gender: "Female", priority: "Yes" },
      { name: "Irene", gender: "Female", priority: "No" },
      { name: "Khor KH", gender: "Female", priority: "No" },
      { name: "Kwek KC", gender: "Female", priority: "No" },
      { name: "Lee CT", gender: "Female", priority: "No" },
      { name: "Lee HC", gender: "Female", priority: "Yes" },
      { name: "Lee YY", gender: "Female", priority: "No" },
      { name: "Liew KH", gender: "Female", priority: "Yes" },
      { name: "Lily", gender: "Female", priority: "No" },
      { name: "Lim Ah Tay", gender: "Female", priority: "No" },
      { name: "Lim Ai Tee", gender: "Female", priority: "No" },
      { name: "Lim CH", gender: "Female", priority: "No" },
      { name: "Lim YL", gender: "Female", priority: "Yes" },
      { name: "Mary", gender: "Female", priority: "No" },
      { name: "Mong", gender: "Female", priority: "No" },
      { name: "Ng Ah L", gender: "Female", priority: "No" },
      { name: "Ng CS", gender: "Female", priority: "No" },
      { name: "Ng KG", gender: "Female", priority: "No" },
      { name: "Ng Song L", gender: "Female", priority: "Yes" },
      { name: "Oh Bee", gender: "Female", priority: "No" },
      { name: "Oh KE", gender: "Female", priority: "Yes" },
      { name: "Peck", gender: "Female", priority: "No" },
      { name: "Phang Ah N", gender: "Female", priority: "No" },
      { name: "Siah HL", gender: "Female", priority: "No" },
      { name: "Sim KS", gender: "Female", priority: "Yes" },
      { name: "Soo", gender: "Female", priority: "No" },
      { name: "Tan Ah Ler", gender: "Female", priority: "Yes" },
      { name: "Tan Cheng S", gender: "Female", priority: "No" },
      { name: "Tan Kim L", gender: "Female", priority: "No" },
      { name: "Tee Wee", gender: "Female", priority: "No" },
      { name: "Teng BI", gender: "Female", priority: "Yes" },
      { name: "Teo GC", gender: "Female", priority: "No" },
      { name: "Teo Soy M", gender: "Female", priority: "Yes" },
      { name: "Theresa", gender: "Female", priority: "No" },
      { name: "Toh C", gender: "Female", priority: "No" },
      { name: "Yap", gender: "Female", priority: "No" },
      { name: "Yim", gender: "Female", priority: "Yes" },
      { name: "Yong", gender: "Female", priority: "No" }
    ],
    clientQueueData: [
      {
        name: "Ang SK",
        toiletId: "2",
        entertime: "2019-11-08 13:08:00",
        leavetime: "2019-11-08 13:15:00"
      },
      {
        name: "Chee LC",
        toiletId: "1",
        entertime: "2019-11-08 11:29:00",
        leavetime: "2019-11-08 11:31:00"
      },
      {
        name: "Chee LC",
        toiletId: "2",
        entertime: "2019-11-08 13:24:00",
        leavetime: "2019-11-08 13:26:00"
      },
      {
        name: "Foo HK",
        toiletId: "1",
        entertime: "2019-11-08 11:47:00",
        leavetime: "2019-11-08 11:50:00"
      },
      {
        name: "Foo HK",
        toiletId: "3",
        entertime: "2019-11-08 13:39:00",
        leavetime: "2019-11-08 13:42:00"
      },
      {
        name: "Goh SK",
        toiletId: "1",
        entertime: "2019-11-08 12:21:00",
        leavetime: "2019-11-08 12:22:00"
      },
      {
        name: "Guna",
        toiletId: "3",
        entertime: "2019-11-08 10:55:00",
        leavetime: "2019-11-08 11:04:00"
      },
      {
        name: "Irene",
        toiletId: "3",
        entertime: "2019-11-08 11:05:00",
        leavetime: "2019-11-08 11:09:00"
      },
      {
        name: "Irene",
        toiletId: "2",
        entertime: "2019-11-08 11:41:00",
        leavetime: "2019-11-08 11:48:00"
      },
      {
        name: "Irene",
        toiletId: "3",
        entertime: "2019-11-08 13:29:00",
        leavetime: "2019-11-08 13:32:00"
      },
      {
        name: "Lee YY",
        toiletId: "2",
        entertime: "2019-11-08 13:00:00",
        leavetime: "2019-11-08 13:06:00"
      },
      {
        name: "Liew KH",
        toiletId: "3",
        entertime: "2019-11-08 10:52:00",
        leavetime: "2019-11-08 10:55:00"
      },
      {
        name: "Liew KH",
        toiletId: "3",
        entertime: "2019-11-08 12:12:00",
        leavetime: "2019-11-08 12:18:00"
      },
      {
        name: "Liew KH",
        toiletId: "2",
        entertime: "2019-11-08 13:21:00",
        leavetime: "2019-11-08 13:24:00"
      },
      {
        name: "Lily",
        toiletId: "2",
        entertime: "2019-11-08 11:48:00",
        leavetime: "2019-11-08 11:56:00"
      },
      {
        name: "Lim Ai Tee",
        toiletId: "1",
        entertime: "2019-11-08 11:34:00",
        leavetime: "2019-11-08 11:37:00"
      },
      {
        name: "Lim Ai Tee",
        toiletId: "1",
        entertime: "2019-11-08 13:12:00",
        leavetime: "2019-11-08 13:17:00"
      },
      {
        name: "Lim CH",
        toiletId: "3",
        entertime: "2019-11-08 12:03:00",
        leavetime: "2019-11-08 12:08:00"
      },
      {
        name: "Lim CH",
        toiletId: "3",
        entertime: "2019-11-08 12:20:00",
        leavetime: "2019-11-08 12:25:00"
      },
      {
        name: "Lim CH",
        toiletId: "1",
        entertime: "2019-11-08 13:28:00",
        leavetime: "2019-11-08 13:30:00"
      },
      {
        name: "Mary",
        toiletId: "2",
        entertime: "2019-11-08 11:08:00",
        leavetime: "2019-11-08 11:09:00"
      },
      {
        name: "Mary",
        toiletId: "1",
        entertime: "2019-11-08 13:33:00",
        leavetime: "2019-11-08 13:47:00"
      },
      {
        name: "Mong",
        toiletId: "2",
        entertime: "2019-11-08 11:23:00",
        leavetime: "2019-11-08 11:36:00"
      },
      {
        name: "Mong",
        toiletId: "1",
        entertime: "2019-11-08 12:15:00",
        leavetime: "2019-11-08 12:20:00"
      },
      {
        name: "Mong",
        toiletId: "2",
        entertime: "2019-11-08 13:31:00",
        leavetime: "2019-11-08 13:47:00"
      },
      {
        name: "Ng KG",
        toiletId: "1",
        entertime: "2019-11-08 13:23:00",
        leavetime: "2019-11-08 13:26:00"
      },
      {
        name: "Oh KE",
        toiletId: "3",
        entertime: "2019-11-08 11:20:00",
        leavetime: "2019-11-08 11:24:00"
      },
      {
        name: "Oh KE",
        toiletId: "3",
        entertime: "2019-11-08 12:17:00",
        leavetime: "2019-11-08 12:20:00"
      },
      {
        name: "Oh KE",
        toiletId: "3",
        entertime: "2019-11-08 13:35:00",
        leavetime: "2019-11-08 13:38:00"
      },
      {
        name: "Pang Ah N",
        toiletId: "1",
        entertime: "2019-11-08 11:51:00",
        leavetime: "2019-11-08 11:54:00"
      },
      {
        name: "Pang Ah N",
        toiletId: "3",
        entertime: "2019-11-08 13:10:00",
        leavetime: "2019-11-08 13:15:00"
      },
      {
        name: "Sim KS",
        toiletId: "2",
        entertime: "2019-11-08 11:02:00",
        leavetime: "2019-11-08 11:06:00"
      },
      {
        name: "Sim KS",
        toiletId: "3",
        entertime: "2019-11-08 11:55:00",
        leavetime: "2019-11-08 11:58:00"
      },
      {
        name: "Sim KS",
        toiletId: "3",
        entertime: "2019-11-08 13:32:00",
        leavetime: "2019-11-08 13:35:00"
      },
      {
        name: "Soo",
        toiletId: "3",
        entertime: "2019-11-08 13:21:00",
        leavetime: "2019-11-08 13:25:00"
      },
      {
        name: "Teng BI",
        toiletId: "2",
        entertime: "2019-11-08 11:14:00",
        leavetime: "2019-11-08 11:22:00"
      },
      {
        name: "Theresa",
        toiletId: "1",
        entertime: "2019-11-08 11:44:00",
        leavetime: "2019-11-08 11:45:00"
      },
      {
        name: "Theresa",
        toiletId: "1",
        entertime: "2019-11-08 12:25:00",
        leavetime: "2019-11-08 12:26:00"
      },
      {
        name: "Theresa",
        toiletId: "3",
        entertime: "2019-11-08 13:04:00",
        leavetime: "2019-11-08 13:06:00"
      },
      {
        name: "Theresa",
        toiletId: "1",
        entertime: "2019-11-08 13:26:00",
        leavetime: "2019-11-08 13:28:00"
      },
      {
        name: "Toh C",
        toiletId: "3",
        entertime: "2019-11-08 11:39:00",
        leavetime: "2019-11-08 11:40:00"
      },
      {
        name: "Toh C",
        toiletId: "2",
        entertime: "2019-11-08 12:52:00",
        leavetime: "2019-11-08 12:56:00"
      },
      {
        name: "Yim",
        toiletId: "3",
        entertime: "2019-11-08 11:51:00",
        leavetime: "2019-11-08 11:53:00"
      },
      {
        name: "Yim",
        toiletId: "1",
        entertime: "2019-11-08 13:20:00",
        leavetime: "2019-11-08 13:22:00"
      },
      {
        name: "Yong",
        toiletId: "3",
        entertime: "2019-11-08 12:44:00",
        leavetime: "2019-11-08 12:49:00"
      }
    ]
  },
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}
