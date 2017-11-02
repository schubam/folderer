Folderer
======== 

Organizes files into sub-folders based their file extension. This is helpful for organizing large amounts of ebooks, 
i.e. purchased in a Humble Bundle.

How it works
------------

It checks for all file extensions in the target directory. Then it creates a folder in this directory named after the
respective file extensions. After that the files are moved into the respective folders.

Example
-------

Before
```text
$ tree /my/folder/with/books
├── askoutrageously.epub
├── askoutrageously.pdf
├── banishyourinnercritic.epub
├── banishyourinnercritic.mobi
├── banishyourinnercritic.pdf
├── communicatelikealeader.epub
├── communicatelikealeader.pdf
├── corporatesurvivalguideforyourtwenties.epub
├── corporatesurvivalguideforyourtwenties.mobi
├── corporatesurvivalguideforyourtwenties.pdf
├── crunchtime_ebook.epub
├── crunchtime_ebook.pdf
├── eatthatfrog.epub
├── eatthatfrog.mobi
├── eatthatfrog.pdf
├── firstthingsfirst.epub
├── firstthingsfirst.mobi
├── firstthingsfirst.pdf
├── guts_ebook.epub
├── guts_ebook.mobi
├── guts_ebook.pdf
├── howtobeheard.epub
├── howtobeheard.mobi
├── howtobeheard.pdf
├── humbleinquiry.epub
├── humbleinquiry.pdf
├── hustleawaydebt.epub
├── hustleawaydebt.mobi
├── hustleawaydebt.pdf
├── managingforpeoplewhohatemanaging.epub
├── managingforpeoplewhohatemanaging.pdf
├── negotiatingtheimpossible.epub
├── negotiatingtheimpossible.pdf
├── notoriouslydapper.epub
├── notoriouslydapper.mobi
├── notoriouslydapper.pdf
├── overcomingbias.epub
├── overcomingbias.pdf
├── stopguessing.epub
├── stopguessing.pdf
├── the7habitsofhighlyeffectivepeople.epub
├── the7habitsofhighlyeffectivepeople.mobi
├── the7habitsofhighlyeffectivepeople.pdf
├── thequietriseofintroverts.epub
├── thequietriseofintroverts.mobi
├── thequietriseofintroverts.pdf
├── wecanttalkaboutthatatwork.epub
├── wecanttalkaboutthatatwork.pdf
├── whatyourbossreallywantsfromyou.epub
└── whatyourbossreallywantsfromyou.pdf

0 directories, 50 files
```

Run the script
```
$ node main.js /my/folder/with/books  
$ tree /my/folder/with/books
├── epub
│   ├── askoutrageously.epub
│   ├── banishyourinnercritic.epub
│   ├── communicatelikealeader.epub
│   ├── corporatesurvivalguideforyourtwenties.epub
│   ├── crunchtime_ebook.epub
│   ├── eatthatfrog.epub
│   ├── firstthingsfirst.epub
│   ├── guts_ebook.epub
│   ├── howtobeheard.epub
│   ├── humbleinquiry.epub
│   ├── hustleawaydebt.epub
│   ├── managingforpeoplewhohatemanaging.epub
│   ├── negotiatingtheimpossible.epub
│   ├── notoriouslydapper.epub
│   ├── overcomingbias.epub
│   ├── stopguessing.epub
│   ├── the7habitsofhighlyeffectivepeople.epub
│   ├── thequietriseofintroverts.epub
│   ├── wecanttalkaboutthatatwork.epub
│   └── whatyourbossreallywantsfromyou.epub
├── mobi
│   ├── banishyourinnercritic.mobi
│   ├── corporatesurvivalguideforyourtwenties.mobi
│   ├── eatthatfrog.mobi
│   ├── firstthingsfirst.mobi
│   ├── guts_ebook.mobi
│   ├── howtobeheard.mobi
│   ├── hustleawaydebt.mobi
│   ├── notoriouslydapper.mobi
│   ├── the7habitsofhighlyeffectivepeople.mobi
│   └── thequietriseofintroverts.mobi
└── pdf
    ├── askoutrageously.pdf
    ├── banishyourinnercritic.pdf
    ├── communicatelikealeader.pdf
    ├── corporatesurvivalguideforyourtwenties.pdf
    ├── crunchtime_ebook.pdf
    ├── eatthatfrog.pdf
    ├── firstthingsfirst.pdf
    ├── guts_ebook.pdf
    ├── howtobeheard.pdf
    ├── humbleinquiry.pdf
    ├── hustleawaydebt.pdf
    ├── managingforpeoplewhohatemanaging.pdf
    ├── negotiatingtheimpossible.pdf
    ├── notoriouslydapper.pdf
    ├── overcomingbias.pdf
    ├── stopguessing.pdf
    ├── the7habitsofhighlyeffectivepeople.pdf
    ├── thequietriseofintroverts.pdf
    ├── wecanttalkaboutthatatwork.pdf
    └── whatyourbossreallywantsfromyou.pdf

3 directories, 50 files
```

Advise
------
Use with caution and on your own risk. There are not many error checks and you may lose data.