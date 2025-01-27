export interface EmailData {
  subjectLine: string
  body: string
  from: string
  to?: string
  isReal: boolean
}

export class Constants {
  // Window Heights
  public static WINDOW_WIDTH = 800
  public static WINDOW_HEIGHT = 600
  public static NUM_LIVES = 3
  public static BASE_EXP = 5

  // Recipients
  public static RECIPIENTS = [
    'marth@bmail.com',
    'luigi@bmail.com',
    'donkeykong@bmail.com',
    'kingddd@bmail.com',
    'johnnyshewchuk@bmail.com',
    'kellyyoung@bmail.com',
  ]

  public static LEVEL_ONE_EMAILS: EmailData[] = [
    {
      subjectLine: 'Big  time',
      body: 'Hello, make    :DDDD',
      from: 'Boogle <larry@menuwand.com>',
      to: Phaser.Utils.Array.GetRandom(this.RECIPIENTS),
      isReal: false,
    },
    {
      subjectLine: 'HR Meeting On Calender',
      body: 'This was extremely unprofessional. I have CCed your supervisor on this email and set a set a date for us to meet.',
      from: 'Sharon Smith <HR@boogle.com>',
      to: 'kingddd@bmail.com',
      isReal: true,
    },
    {
      subjectLine: 'Court Summons Date for',
      body: 'Your court date is set for 2/30/2033.',
      from: 'STATE OF BALIFORNIA <ba.gob>',
      to: 'kingddd@bmail.com',
      isReal: false,
    },
    {
      subjectLine: 'URjent You Have Won Tickets to see In Concert',
      body: 'Dear, Recipient YOU have been SELECTED to see [YOUR.Name.HERE]',
      from: 'Banye Best <banye@microhard.in.tr.jp.de.co.uk>',
      to: Phaser.Utils.Array.GetRandom(this.RECIPIENTS),
      isReal: false,
    },
    {
      subjectLine: 'Court Summons for  ',
      body: 'Your court date has been set for 2/28/1994.',
      from: 'STATE OF BALIFORNIA DISTRICT ATTORNEY OFFICE <da@ba.gov>',
      to: Phaser.Utils.Array.GetRandom(this.RECIPIENTS),
      isReal: true,
    },
  ]

  public static LEVEL_TWO_EMAILS: EmailData[] = [
    {
      subjectLine: 'test 1',
      from: 'test1@test.com',
      body: 'This is a phishing placeholder 1',
      to: Phaser.Utils.Array.GetRandom(this.RECIPIENTS),
      isReal: false,
    },
    {
      subjectLine: 'test 2',
      from: 'test2@test.com',
      body: 'This is a legit placeholder 2',
      to: Phaser.Utils.Array.GetRandom(this.RECIPIENTS),
      isReal: true,
    },
  ]

  public static ALL_EMAILS: EmailData[][] = [
    Constants.LEVEL_ONE_EMAILS,
    Constants.LEVEL_TWO_EMAILS,
  ]
}
