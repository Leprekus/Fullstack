config:
{
  "include": [
    "**/.*/*"
  ]
}
Fs::
//// [c:/dev/.z/.b.ts]


//// [c:/dev/.z/c.ts]


//// [c:/dev/g.min.js/.g/g.ts]


//// [c:/dev/w/.u/e.ts]


//// [c:/dev/x/.y/a.ts]


//// [c:/dev/x/d.ts]


//// [c:/dev/x/y/.e.ts]


//// [c:/dev/x/y/d.ts]



configFileName:: c:/dev/tsconfig.json
Result
{
  "options": {
    "configFilePath": "c:/dev/tsconfig.json"
  },
  "fileNames": [
    "c:/dev/.z/c.ts",
    "c:/dev/g.min.js/.g/g.ts",
    "c:/dev/w/.u/e.ts",
    "c:/dev/x/.y/a.ts"
  ],
  "typeAcquisition": {
    "enable": false,
    "include": [],
    "exclude": []
  },
  "raw": {
    "include": [
      "**/.*/*"
    ],
    "compileOnSave": false
  },
  "wildcardDirectories": {
    "c:/dev": "WatchDirectoryFlags.Recursive"
  },
  "compileOnSave": false
}
Errors::

