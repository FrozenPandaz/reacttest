module.exports = {
  name: 'ngapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngapp/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
