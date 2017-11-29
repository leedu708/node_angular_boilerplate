exports.options = {
  db: {
        native_parser: false
      },
  server: {
            poolSize: 5,
            socketOptions: {
                              keepAlive: 1,
                              connectTimeoutMS: 30000
                            },
            ReadPreference: 'SECONDARY_PREFERRED',
            auto_reconnect: true
          },
  replset: {
              rs_name: 'set-54948a83a46557611300a4b4',
              socketOptions: {
                                keepAlive: 1,
                                connectTimeoutMS: 30000
                              },
              ReadPreference: 'SECONDARY_PREFERRED',
              auto_reconnect: true
            },
  user: 'insert_username',
  pass: 'insert_password'
};

exports.url = 'insert_url';
