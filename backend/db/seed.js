const db = require("./connection");

const faker = require("faker");

let pinArr = [
  "https://i.pinimg.com/564x/1f/cb/12/1fcb12dfebd60fe22b420e7d942927c7.jpg",
  "https://i.pinimg.com/564x/7e/fa/2f/7efa2f3647f6addc376b55d5a699f4c8.jpg",
  "https://i.pinimg.com/564x/01/0b/a8/010ba843be2b80fc7480b70193c3fdea.jpg",
  "https://i.pinimg.com/564x/5c/f6/e6/5cf6e62c53e41c51d8fab6ea3f89a920.jpg",
  "https://i.pinimg.com/564x/39/dc/77/39dc77def3cfe9dba0245cec0bb6db90.jpg",
  "https://i.pinimg.com/564x/df/3c/1f/df3c1fdd9c1a3049cf6ba9b1e8695f95.jpg",
  "https://i.pinimg.com/564x/8f/63/d5/8f63d5c80ebe9f02268a83c2bea04811.jpg",
  "https://i.pinimg.com/564x/dd/78/49/dd78497d219d4f80ece55ea08a0e5aff.jpg",
  "https://i.pinimg.com/564x/c0/f2/a3/c0f2a310beb8ac724d937db35fa0d7c0.jpg",
  "https://i.pinimg.com/564x/1f/cb/12/1fcb12dfebd60fe22b420e7d942927c7.jpg",
  "https://i.pinimg.com/564x/cf/f8/17/cff817127395e1c5faaf6be1b214214c.jpg",
  "https://i.pinimg.com/564x/8a/fb/0a/8afb0a819aeb105f4a46785d594ea555.jpg",
  "https://i.pinimg.com/564x/62/98/5f/62985f4970e795ba684e4539aad2d64c.jpg",
  "https://i.pinimg.com/564x/53/e6/d8/53e6d8e4f2ccd3974906952275459c1c.jpg",
  "https://i.pinimg.com/564x/3d/de/69/3dde69d32a6ab91f25ae8d9e5643d0af.jpg",
  "https://i.pinimg.com/564x/37/36/38/373638be09b1d45f46432b236483f1ca.jpg?b=t",
  "https://i.pinimg.com/564x/18/c6/76/18c676cec5f3f62ed60c1faeeeacf89e.jpg",
  "https://i.pinimg.com/564x/eb/be/10/ebbe1083694046d981c361f349354039.jpg",
  "https://i.pinimg.com/564x/42/51/cf/4251cf347b3aeffe1a6e8824f5ca9767.jpg",
  "https://i.pinimg.com/564x/39/e3/b0/39e3b046591cda6bb9a25abfb14915d7.jpg?b=t",
  "https://i.pinimg.com/236x/83/1d/d6/831dd60dbc73cd0e2e321ae455d4f5a5.jpg",
  "https://i.pinimg.com/564x/7c/97/8b/7c978b31992ac1f04d3fde80b773851c.jpg",
  "https://i.pinimg.com/564x/73/ce/dd/73cedd6f99708da8f00b8a7713beeea3.jpg",
  "https://i.pinimg.com/564x/86/02/38/8602389aec9be6c6e9e3553b62cd2475.jpg",
  "https://i.pinimg.com/564x/15/64/a8/1564a8781fb358c21e5ca55a10016e33.jpg?b=t",
  "https://i.pinimg.com/564x/c7/93/d9/c793d95094b1ba62fb6991ed6466d81c.jpg",
  "https://i.pinimg.com/564x/0e/6b/70/0e6b7091c310292746179523814c0253.jpg",
  "https://i.pinimg.com/564x/66/8b/9f/668b9fd03b016f97741d8df4894f4572.jpg",
  "https://i.pinimg.com/564x/05/9e/5a/059e5a3d212b0d56913e51b6488624f0.jpg",
  "https://i.pinimg.com/564x/09/35/4c/09354cb11a7019f760e59bdcc35aee9c.jpg",
  "https://i.pinimg.com/564x/f4/54/62/f45462f376d84ce1857c1aa2e232197d.jpg",
  "https://i.pinimg.com/564x/56/4c/96/564c9699adb4d945b5209c867e4f12e6.jpg",
  "https://i.pinimg.com/564x/f9/8c/ef/f98cef7a05df4b3ad25fdf247fd22d0f.jpg",
  "https://i.pinimg.com/564x/5a/5f/f3/5a5ff3af605ad1887f43d779342e62da.jpg",
  "https://i.pinimg.com/564x/ef/d3/c8/efd3c8f9603c8c4e4b2f108980191670.jpg",
  "https://i.pinimg.com/564x/ee/6c/8d/ee6c8d61ca0c1731c73235f0ddbfc25b.jpg",
  "https://i.pinimg.com/564x/ea/5a/74/ea5a74bbcfc5d3772e47a77232d1c9a4.jpg",
  "https://i.pinimg.com/564x/4b/1e/3a/4b1e3ac507d69239eaef3aaae69acb81.jpg",
  "https://i.pinimg.com/564x/7e/0b/a7/7e0ba73dc1159a6d8dfc1cf52b661987.jpg?b=t",
  "https://i.pinimg.com/564x/c9/cc/27/c9cc27bd02c724a36f795db2549f9e32.jpg",
  "https://i.pinimg.com/564x/52/7e/a7/527ea73532d32ef0683dd5b782364ee3.jpg",
  "https://i.pinimg.com/564x/2e/e6/ab/2ee6abcf301865704c3d29f46b77574a.jpg?b=t",
  "https://i.pinimg.com/564x/7a/ad/95/7aad9508cb6dd1738af22d07a9e122a7.jpg",
  "https://i.pinimg.com/564x/df/0f/f6/df0ff63524a502c332a627df024fa5b0.jpg?b=t",
  "https://i.pinimg.com/564x/3a/32/b7/3a32b73bc57058266b60ade384517961.jpg?b=t",
  "https://i.pinimg.com/564x/ef/6a/b3/ef6ab398ca89573117dafc8c11f6f905.jpg",
  "https://i.pinimg.com/564x/20/78/da/2078da43f9eb63259ae2ba7a48f6ec55.jpg",
  "https://i.pinimg.com/564x/8c/31/43/8c31432c0fe22d6280f7b6dd2d98f3b8.jpg",
  "https://i.pinimg.com/564x/ae/c0/da/aec0da23b694bacaff059baffb7e0354.jpg",
  "https://i.pinimg.com/564x/1f/42/ff/1f42ff76551457a07d969aa5b466e628.jpg",
  "https://i.pinimg.com/564x/9c/fb/09/9cfb094b718b06f2269abaf8aa06027c.jpg",
  "https://i.pinimg.com/564x/e2/dd/31/e2dd31fd9ccb95a3b7c4e5fa22b4168e.jpg",
  "https://i.pinimg.com/564x/b9/35/e2/b935e2f758a9add5374bfb9196922630.jpg?b=t",
  "https://i.pinimg.com/564x/2c/b0/0f/2cb00f824a70c472f0abce64277d9523.jpg?b=t",
  "https://i.pinimg.com/564x/7e/ea/97/7eea97c02804f178469e88defdd3c166.jpg",
  "https://i.pinimg.com/564x/c8/77/c7/c877c748859f854c5f84267c30cda599.jpg",
  "https://i.pinimg.com/564x/06/04/f1/0604f1b69313cf8a5dfb465cd6d026ea.jpg",
  "https://i.pinimg.com/564x/1b/81/9f/1b819f122169e6da712f573414d4c45b.jpg",
  "https://i.pinimg.com/564x/fd/b6/d5/fdb6d533ec3a734c12e29e927aa68368.jpg",
  "https://i.pinimg.com/564x/cd/b0/07/cdb0078d9bd0bbea179419564c9178a0.jpg?b=t",
  "https://i.pinimg.com/564x/6a/d4/37/6ad437f1e0fd586d7a81b042f59bc911.jpg",
  "https://i.pinimg.com/564x/7a/f9/05/7af9056a5fc3cb13a02cc1d065507909.jpg?b=t",
  "https://i.pinimg.com/564x/d9/1e/96/d91e961b60209e8be9a913ec4aac7729.jpg?b=t",
  "https://i.pinimg.com/564x/41/f0/6b/41f06b03f561189a0be20bbccc089860.jpg?b=t",
  "https://i.pinimg.com/564x/f4/88/e1/f488e1feb4b0a7a516cb6d945597c8ce.jpg?b=t",
  "https://i.pinimg.com/564x/c2/80/e3/c280e34feae851e4d869099682555def.jpg",
  "https://i.pinimg.com/564x/1a/27/6d/1a276dc9212dbdb69e3ad7b62a34303e.jpg",
  "https://i.pinimg.com/564x/5b/37/51/5b37510b17490cd0769103b92464603d.jpg",
  "https://i.pinimg.com/564x/a9/09/34/a9093485ce20bb47ac01c58c6ec051a1.jpg",
  "https://i.pinimg.com/564x/17/75/3e/17753e198dfa0cd4a22d7735c4678d3a.jpg",
  "https://i.pinimg.com/564x/4a/d9/cf/4ad9cf020e9b36ff7ece44f54f0c6dc8.jpg",
  "https://i.pinimg.com/564x/92/16/02/9216020a6e758fec2443829fa4967bab.jpg",
  "https://i.pinimg.com/564x/03/51/ed/0351eda2c07dfde2439dbb8b4f5cc5a4.jpg?b=t",
  "https://i.pinimg.com/564x/ca/60/e6/ca60e6ae0f0b1c51626a50c968fa9211.jpg",
  "https://i.pinimg.com/564x/4a/fd/64/4afd64a9bdc3bef22e8174ec60dccfac.jpg",
  "https://i.pinimg.com/564x/86/09/78/8609780dc5ce4d526bc150c5b788a75b.jpg?b=t",
  "https://i.pinimg.com/564x/dd/a5/5b/dda55bff7fe1ec9af3bae9724555b798.jpg",
  "https://i.pinimg.com/564x/56/9a/d1/569ad1d7ba698b39f24c79e4410dbc49.jpg?b=t",
  "https://i.pinimg.com/564x/95/53/ca/9553ca5c8f1795c5f3909a9c257c9711.jpg",
  "https://i.pinimg.com/564x/8a/79/79/8a7979c197ae4d67687e5e18b93d9fbd.jpg",
  "https://i.pinimg.com/564x/9f/d8/49/9fd849bd120309ee4e68a76d962792ea.jpg",
  "https://i.pinimg.com/564x/ca/1c/1b/ca1c1bb48ebe8f61c147afed1680ccac.jpg",
  "https://i.pinimg.com/564x/8d/88/c2/8d88c25bd929bace1c35b09922953c4e.jpg",
  "https://i.pinimg.com/564x/35/c1/3e/35c13e0e3a8e55c9bea4ce07c6a00cfd.jpg",
  "https://i.pinimg.com/564x/9f/1e/ec/9f1eec432e977b1972ef7e09812ee091.jpg?b=t",
  "https://i.pinimg.com/564x/7d/b1/80/7db180c1a920e0877a07f40c343fafec.jpg",
  "https://i.pinimg.com/564x/1f/79/71/1f79711dbced92c5754ef8500e9356ed.jpg",
  "https://i.pinimg.com/564x/6e/9e/52/6e9e5213de27b8edc570a6f4f2c9059b.jpg",
  "https://i.pinimg.com/564x/3b/ed/eb/3bedeb76821f335fae5c94cd90edab2a.jpg",
  "https://i.pinimg.com/564x/96/e1/5a/96e15aa659b86c46614a0aee6982a032.jpg",
  "https://i.pinimg.com/564x/21/a9/88/21a988bcfb51bddbf21f7cf118ac40d1.jpg",
  "https://i.pinimg.com/564x/c5/d1/65/c5d165882fbfe5eaf1dadd4ff51c3fa7.jpg",
  "https://i.pinimg.com/564x/44/f8/37/44f83730dae83db68faeac9491f717a4.jpg",
  "https://i.pinimg.com/564x/74/e6/f6/74e6f6348636dec50bcaeccb138888cb.jpg?b=t",
  "https://i.pinimg.com/564x/85/b3/e7/85b3e7202b7d3c3a254a456793115e63.jpg",
  "https://i.pinimg.com/564x/75/b9/f5/75b9f51e5d34ba99d3190b0cf2c7d4dd.jpg",
  "https://i.pinimg.com/564x/23/fb/04/23fb04ef28a985c3d4adc21be7554f91.jpg?b=t",
  "https://i.pinimg.com/564x/9d/e9/ba/9de9ba8966b07a257349dbd78fdf78da.jpg?b=t",
  "https://i.pinimg.com/564x/0b/1f/bf/0b1fbf7435297c54088e364ce1b02c9a.jpg?b=t",
  "https://i.pinimg.com/564x/2f/99/31/2f99315afd257128d94d8cc65cdf51ab.jpg?b=t"
];

let users = [];

for (let i = 0; i < 5; i++) {
  let email = faker.internet.email();
  let username = faker.internet.userName();
  let password_digest = faker.internet.password();
  let profile_pic = faker.image.avatar();
  let first_name = faker.name.firstName();
  let last_name = faker.name.lastName();
  let age = Math.floor(Math.random() * 50) + 18;
  let str = `('${email}', '${username}', '${password_digest}', '${profile_pic}', '${first_name}', '${last_name}', ${age})`;
  users.push(str);
}

let boards = [];

for (let i = 0; i < 20; i++) {
  let user_id = Math.floor(Math.random() * 5) + 1;
  let title = faker.lorem.words();
  let description = faker.lorem.sentences();
  let str = `(${user_id}, '${title}', '${description}')`;
  boards.push(str);
}

let pins = [];

for (let i = 0; i < 100; i++) {
  let user_id = Math.floor(Math.random() * 5) + 1;
  let board_id = Math.floor(Math.random() * 20) + 1;
  let title = faker.lorem.words();
  let description = faker.lorem.sentences();
  let webpage_url = faker.internet.url();
  let pinImg_url = pinArr[i];
  let str = `(${user_id}, ${board_id}, '${title}', '${description}', '${webpage_url}', '${pinImg_url}')`;
  pins.push(str);
}

users = users.join(", ");
boards = boards.join(", ");
pins = pins.join(", ");

db.none(
  "INSERT INTO users(email, username, password_digest, profile_pic, first_name, last_name, age) VALUES " +
    users +
    ";"
)
  .then(() => {
    db.none(
      "INSERT INTO boards(user_id, title, description) VALUES " + boards + ";"
    ).then(() => {
      db.none(
        "INSERT INTO pins(user_id, board_id, title, description, webpage_url, pinImg_url) VALUES " +
          pins +
          ";"
      );
    });
  })
  .catch(err => {
    console.log(err);
  });
