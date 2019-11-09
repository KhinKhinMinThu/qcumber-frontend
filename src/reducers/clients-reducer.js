import GM1 from "../containers/assets/gm1.jpg";
import GM2 from "../containers/assets/gm2.jpg";
import GM3 from "../containers/assets/gm3.jpg";
import GM4 from "../containers/assets/gm4.jpg";
import GM5 from "../containers/assets/gm5.jpg";
import GM6 from "../containers/assets/gm6.jpg";

export default function(
  state = {
    getErrMsg: null,
    clientData: [
      { name: "Ah Choo", gender: "F", priority: "Yes", img: GM1 },
      { name: "Ang SK", gender: "F", priority: "No", img: GM2 },
      { name: "Chee LC", gender: "F", priority: "Yes", img: GM3 },
      { name: "Chew KF", gender: "F", priority: "Yes", img: GM4 },
      { name: "Chin SF", gender: "F", priority: "No", img: GM5 },
      { name: "Chua HC", gender: "F", priority: "Yes", img: GM6 },
      { name: "Foo HK", gender: "F", priority: "No", img: GM1 },
      { name: "Goh BC", gender: "F", priority: "Yes", img: GM2 },
      { name: "Goh Siang G", gender: "F", priority: "No", img: GM3 },
      { name: "Goh SK", gender: "F", priority: "No", img: GM4 },
      { name: "Gopal", gender: "F", priority: "No", img: GM5 },
      { name: "Guna", gender: "F", priority: "Yes", img: GM6 },
      { name: "Hoo", gender: "F", priority: "Yes", img: GM1 },
      { name: "Irene", gender: "F", priority: "No", img: GM2 },
      { name: "Khor KH", gender: "F", priority: "No", img: GM3 },
      { name: "Kwek KC", gender: "F", priority: "No", img: GM4 },
      { name: "Lee CT", gender: "F", priority: "No", img: GM5 },
      { name: "Lee HC", gender: "F", priority: "Yes", img: GM6 },
      { name: "Lee YY", gender: "F", priority: "No", img: GM1 },
      { name: "Liew KH", gender: "F", priority: "Yes", img: GM2 },
      { name: "Lily", gender: "F", priority: "No", img: GM3 },
      { name: "Lim Ah Tay", gender: "F", priority: "No", img: GM4 },
      { name: "Lim Ai Tee", gender: "F", priority: "No", img: GM5 },
      { name: "Lim CH", gender: "F", priority: "No", img: GM6 },
      { name: "Lim YL", gender: "F", priority: "Yes", img: GM1 },
      { name: "Mary", gender: "F", priority: "No", img: GM2 },
      { name: "Mong", gender: "F", priority: "No", img: GM3 },
      { name: "Ng Ah L", gender: "F", priority: "No", img: GM4 },
      { name: "Ng CS", gender: "F", priority: "No", img: GM5 },
      { name: "Ng KG", gender: "F", priority: "No", img: GM6 },
      { name: "Ng Song L", gender: "F", priority: "Yes", img: GM1 },
      { name: "Oh Bee", gender: "F", priority: "No", img: GM2 },
      { name: "Oh KE", gender: "F", priority: "Yes", img: GM3 },
      { name: "Peck", gender: "F", priority: "No", img: GM4 },
      { name: "Phang Ah N", gender: "F", priority: "No", img: GM5 },
      { name: "Siah HL", gender: "F", priority: "No", img: GM6 },
      { name: "Sim KS", gender: "F", priority: "Yes", img: GM1 },
      { name: "Soo", gender: "F", priority: "No", img: GM2 },
      { name: "Tan Ah Ler", gender: "F", priority: "Yes", img: GM3 },
      { name: "Tan Cheng S", gender: "F", priority: "No", img: GM4 },
      { name: "Tan Kim L", gender: "F", priority: "No", img: GM5 },
      { name: "Tee Wee", gender: "F", priority: "No", img: GM6 },
      { name: "Teng BI", gender: "F", priority: "Yes", img: GM1 },
      { name: "Teo GC", gender: "F", priority: "No", img: GM2 },
      { name: "Teo Soy M", gender: "F", priority: "Yes", img: GM3 },
      { name: "Theresa", gender: "F", priority: "No", img: GM4 },
      { name: "Toh C", gender: "F", priority: "No", img: GM5 },
      { name: "Yap", gender: "F", priority: "No", img: GM6 },
      { name: "Yim", gender: "F", priority: "Yes", img: GM1 },
      { name: "Yong", gender: "F", priority: "No", img: GM2 }
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
        name: "Phang Ah N",
        toiletId: "1",
        entertime: "2019-11-08 11:51:00",
        leavetime: "2019-11-08 11:54:00"
      },
      {
        name: "Phang Ah N",
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
