var l = {
    ".QName": "http://ap8.com/Schemas/Atlas/2016-10/AtlasSecurityManagement.ProjectInfoOutResponse",
    "vProjectInfoResponse": [
      {
        "strProjectName": "Project Two",
        "isUserProjMember": true,
        "isUserProjAdmin": false,
        "strUserMemberType": "View & Assign",
        "vProjectAdmins": [
          "Kalai, K",
          "devbuilds_testuser"
        ],
        "vTeamMemberInfo": [
          {
            "strTeamMemberName": "infodba",
            "strTeamMemberUserID": "infodba",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "dba",
            "strTeamMemberRole": "DBA"
          },
          {
            "strTeamMemberName": "devbuilds_testuser",
            "strTeamMemberUserID": "devbuilds_testuser",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          },
          {
            "strTeamMemberName": "vvijaya",
            "strTeamMemberUserID": "vvijaya",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          },
          {
            "strTeamMemberName": "Kalai, K",
            "strTeamMemberUserID": "kalaik",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          },
          {
            "strTeamMemberName": "Test, user1",
            "strTeamMemberUserID": "test_user1",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          }
        ]
      },
      {
        "strProjectName": "Project Three",
        "isUserProjMember": false,
        "isUserProjAdmin": false,
        "strUserMemberType": "",
        "vProjectAdmins": [
          "devbuilds_testuser"
        ],
        "vTeamMemberInfo": [
          {
            "strTeamMemberName": "devbuilds_testuser",
            "strTeamMemberUserID": "devbuilds_testuser",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          },
          {
            "strTeamMemberName": "infodba",
            "strTeamMemberUserID": "infodba",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Project Administration",
            "strTeamMemberRole": "Project Administrator"
          }
        ]
      },
      {
        "strProjectName": "secret project1",
        "isUserProjMember": true,
        "isUserProjAdmin": true,
        "strUserMemberType": "View & Assign",
        "vProjectAdmins": [
          "vvijaya",
          "Kalai, K"
        ],
        "vTeamMemberInfo": [
          {
            "strTeamMemberName": "infodba",
            "strTeamMemberUserID": "infodba",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "dba",
            "strTeamMemberRole": "DBA"
          },
          {
            "strTeamMemberName": "Kalai, K",
            "strTeamMemberUserID": "kalaik",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          },
          {
            "strTeamMemberName": "Test, user1",
            "strTeamMemberUserID": "test_user1",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          },
          {
            "strTeamMemberName": "Test, User2",
            "strTeamMemberUserID": "test_user2",
            "strTeamMemberType": "View",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          },
          {
            "strTeamMemberName": "vvijaya",
            "strTeamMemberUserID": "vvijaya",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          }
        ]
      },
      {
        "strProjectName": "Project One",
        "isUserProjMember": true,
        "isUserProjAdmin": true,
        "strUserMemberType": "View & Assign",
        "vProjectAdmins": [
          "vvijaya",
          "devbuilds_testuser",
          "Kalai, K"
        ],
        "vTeamMemberInfo": [
          {
            "strTeamMemberName": "infodba",
            "strTeamMemberUserID": "infodba",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "dba",
            "strTeamMemberRole": "DBA"
          },
          {
            "strTeamMemberName": "vvijaya",
            "strTeamMemberUserID": "vvijaya",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          },
          {
            "strTeamMemberName": "devbuilds_testuser",
            "strTeamMemberUserID": "devbuilds_testuser",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          },
          {
            "strTeamMemberName": "Kalai, K",
            "strTeamMemberUserID": "kalaik",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          },
          {
            "strTeamMemberName": "Test, user1",
            "strTeamMemberUserID": "test_user1",
            "strTeamMemberType": "View & Assign",
            "strTeamMemberGroup": "Engineering",
            "strTeamMemberRole": "Designer"
          }
        ]
      }
    ]
  };
  //console.log(JSON.stringify(l.vProjectInfoResponse),"\n");
  JSON.stringify
  function compare(key) {
    // Use toUpperCase() to ignore character casing
    return function (a,b) {
        const genreA = a[key].toUpperCase();
    const genreB = b[key].toUpperCase();
  
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
    }
  }
  
  l.vProjectInfoResponse.sort(compare('strProjectName'));
  //console.log(JSON.stringify(l.vProjectInfoResponse));
  var one = ["kalai, K","devbuilds_testuser"];
  ["Kalai, K","devbuilds_testuser"]
  function call(){
      return one.sort();
  }
  //console.log(one.sort());
  console.log(call());

//   function compareValues2(key, order='asc') {
//     return function(a, b) {
//       if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
//         // property doesn't exist on either object
//         return 0;
//       }
  
//       const varA = (typeof a[key] === 'string') ?
//         a[key].toUpperCase() : a[key];
//       const varB = (typeof b[key] === 'string') ?
//         b[key].toUpperCase() : b[key];
  
//       let comparison = 0;
//       if (varA &gt; varB) {
//         comparison = 1;
//       } else if (varA &lt; varB) {
//         comparison = -1;
//       }
//       return (
//         (order == 'desc') ? (comparison * -1) : comparison
//       );
//     };
//   }