export interface IQuestion {
  Id: number;
  question: string;
  optionList: string[];
  answer: number
};

export class QuestionCollection {

  get(): IQuestion[] {
    let questionList = [
      {
        "Id": 1,
        "question": "سائنس ریشے دار اشیا ءکو کیا کہتے ہیں؟",
        "optionList": [
          "کنڈکٹر",
          "انسیولیٹر",
          "توانائی",
          "برق"
        ],
        "answer": 1
      },
      {
        "Id": 2,
        "question": "کاربو ہائیڈریٹ کسے کہتے ہیں؟",
        "optionList": [
          "کچی",
          "کوئلہ",
          "پتھر",
          "ہوا"
        ],
        "answer": 2
      },
      {
        "Id": 3,
        "question": "پروٹین کی ضرورت کیوں ہوتی ہے؟",
        "optionList": [
          "لہو بنانے کے لئے",
          "ہڈیوں کو مضبوط کرنے کے لئے",
          "مزیدار کھانے کے لئے",
          "جسم کو تعمیر کرنے کے لئے"
        ],
        "answer": 4
      },
      {
        "Id": 4,
        "question": "لیپ ایئر کتنے سال بعد آتا ہے؟",
        "optionList": [
          "سال میں ایک بار",
          "دس سال بعد",
          "پندرہ سال بعد",
          "بیس سال بعد"
        ],
        "answer": 3
      },
      {
        "Id": 5,
        "question": "بھارت کا کتنا فیصد حصہ جنگلات سے گھرا ہوا ہے؟",
        "optionList": [
          "20%",
          "25%",
          "30%",
          "35%"
        ],
        "answer": 3
      },
      {
        "Id": 6,
        "question": "کن اشیاء میں ایصال حرارت انجام پاتا ہے؟",
        "optionList": [
          "دھات",
          "بھورے پتھر",
          "چونا",
          "لوہے کا بھاپ"
        ],
        "answer": 1
      },
      {
        "Id": 7,
        "question": "پیاز اور لہسن میں بدبو کس عنصر کی وجہ سے ہوتی ہے؟",
        "optionList": [
          "سلفر",
          "آئیوڈین",
          "فاسفورس",
          "کربن"
        ],
        "answer": 1
      },
      {
        "Id": 8,
        "question": "کون سی دھات تانبے اور جست کا آمیزہ ہے؟",
        "optionList": [
          "براس",
          "برانز",
          "برونز",
          "برنز"
        ],
        "answer": 3
      },
      {
        "Id": 9,
        "question": "مکمل سورج گرہن زیادہ سے زیادہ کتنی دیر رہتا ہے؟",
        "optionList": [
          "2 دن",
          "3 دن",
          "4 دن",
          "5 دن"
        ],
        "answer": 2
      },
      {
        "Id": 10,
        "question": "انسان کے جسم کی سب سے چھوٹی ہڈی کونسی ہے؟",
        "optionList": [
          "گردن کی ہڈی",
          "کان کی ہڈی",
          "جنبشی ہڈی",
          "کلائی"
        ],
        "answer": 3
      },
      {
        "Id": 11,
        "question": "خلیے کی دریافت کس سن میں ہوئی؟",
        "optionList": [
          "1665ء",
          "1685ء",
          "1705ء",
          "1725ء"
        ],
        "answer": 1
      },
      {
        "Id": 12,
        "question": "انسانی جسم کا سب سے بڑا عضو کونسا ہے؟",
        "optionList": [
          "دماغ",
          "کبڑی",
          "معدہ",
          "دل"
        ],
        "answer": 2
      },
      {
        "Id": 13,
        "question": "سب سے تیز رفتار سے سفر کرنے والی شے کونسی ہے؟",
        "optionList": [
          "رفتاری پرندہ",
          "شعاع",
          "ہوا",
          "بجلی"
        ],
        "answer": 4
      },
      {
        "Id": 14,
        "question": "اوزون غلاف کون سی شعاعوں کو جذب کرتا ہے؟",
        "optionList": [
          "یو وی",
          "ایکس رے",
          "گیما رے",
          "بیٹا رے"
        ],
        "answer": 1
      },
      {
        "Id": 15,
        "question": "مائع شے تمام سمتوں میں مساوی دباؤ ڈالتی ہے یہ قانون کس کا ہے؟",
        "optionList": [
          "آرخمیڈیس کا قانون",
          "برنولی کا قانون",
          "پاسکال کا قانون",
          "نیوٹن کا قانون"
        ],
        "answer": 3
      },
      {
        "Id": 16,
        "question": "سب سے پہلا مصنوعی سیارہ کس ملک نے خلا میں چھوڑا تھا؟",
        "optionList": [
          "روس",
          "امریکہ",
          "چین",
          "یورپ"
        ],
        "answer": 1
      },
      {
        "Id": 17,
        "question": "انسان کے جسم میں کتنی پسلیاں ہوتی ہیں؟",
        "optionList": [
          "206",
          "208",
          "210",
          "212"
        ],
        "answer": 1
      },
      {
        "Id": 18,
        "question": "کون سا وٹامن سب سے پہلے دریافت ہوا؟",
        "optionList": [
          "وٹامن اے",
          "وٹامن بی",
          "وٹامن سی",
          "وٹامن ڈی"
        ],
        "answer": 2
      },
      {
        "Id": 19,
        "question": "عالمی یوم آب کس تاریخ کو منایا جاتا ہے؟",
        "optionList": [
          "22 مارچ",
          "22 اپریل",
          "22 مئی",
          "22 جون"
        ],
        "answer": 3
      },
      {
        "Id": 20,
        "question": "تالاب کے پانی کا تحلیل روکنے کے لئے اس پر کون سا الکوحل چھڑکا جاتا ہے؟",
        "optionList": [
          "ایتھل الکوحل",
          "میتھل الکوحل",
          "ایٹرل الکوحل",
          "بیٹا الکوحل"
        ],
        "answer": 1
      },
      {
        "Id": 21,
        "question": "پارے کا نقطہابال کتنا ہے؟",
        "optionList": [
          "0",
          "1",
          "2",
          "3"
        ],
        "answer": 3
      },
      {
        "Id": 22,
        "question": "خون کے کس گروپ کو آفاقی صارف کرتے ہیں؟",
        "optionList": [
          "A",
          "B",
          "AB",
          "O"
        ],
        "answer": 4
      },
      {
        "Id": 23,
        "question": "ر طو بت کو ناپنے کا آلہ کونسا ہے؟",
        "optionList": [
          "ترازو",
          "تپمان",
          "میٹر",
          "پیمانہ"
        ],
        "answer": 2
      },
      {
        "Id": 24,
        "question": "فورسٹ ریسرچ انسٹیٹیوٹ آف انڈیا کس شہر میں واقع ہے؟",
        "optionList": [
          "دہلی",
          "ممبئی",
          "بنگلور",
          "چچی"
        ],
        "answer": 3
      },
      {
        "Id": 25,
        "question": "ہرا تو تیہ سکے کہتے ہیں؟",
        "optionList": [
          "بوتل",
          "برتن",
          "پتھر",
          "مرمر"
        ],
        "answer": 3
      },
      {
        "Id": 26,
        "question": "مجسموں اور ہڈی کے ٹوٹنے پر کون سی چیز استعمال کرتے ہیں؟",
        "optionList": [
          "سلو",
          "پلاسٹر",
          "ٹیپ",
          "گھاوں کا پٹی"
        ],
        "answer": 2
      },
      {
        "Id": 27,
        "question": "غذائی اشیاء کو محفوظ کرنے کے لئے کس کا استعمال کرتے ہیں؟",
        "optionList": [
          "المنیمیم فوئل",
          "پلاسٹک بیگ",
          "کاغذ کا ٹوکرا",
          "ٹین کن"
        ],
        "answer": 1
      },
      {
        "Id": 28,
        "question": "کاربوہائیڈریٹ کی سب سے آسان شکل کون سی ہے؟",
        "optionList": [
          "شکر",
          "گلوکوز",
          "سیلولوز",
          "چاول"
        ],
        "answer": 1
      },
      {
        "Id": 29,
        "question": "ہمارے نظام شمسی جس کہکشاں میں ہے، اس کا کیا نام ہے؟",
        "optionList": [
          "دھرتی",
          "سورج",
          "مریخ",
          "مشتری"
        ],
        "answer": 2
      },
      {
        "Id": 30,
        "question": "ایشیا کی سب سے بڑی بصری دوربین کہاں ہے؟",
        "optionList": [
          "پاکستان",
          "چین",
          "هندوستان",
          "بنگلہ دیش"
        ],
        "answer": 2
      },
      {
        "Id": 31,
        "question": "انسانی دل کی جسامت کتنی ہوتی ہے؟",
        "optionList": [
          "ایک ٹینس",
          "دو ٹینس",
          "تین ٹینس",
          "چار ٹینس"
        ],
        "answer": 1
      },
      {
        "Id": 32,
        "question": "انسانی جسم میں کروموزوم کی کل کتنی جوڑیاں ہوتی ہیں؟",
        "optionList": [
          "1",
          "23",
          "46",
          "69"
        ],
        "answer": 4
      },
      {
        "Id": 33,
        "question": "جن نباتات میں سبز مایا موجود ہوتا ہے، اس گروپ کے نباتات کو کیا کہتے ہیں؟",
        "optionList": [
          "پودوں",
          "جنسی بیج پودے",
          "رنگیں برگ",
          "سبزیاں"
        ],
        "answer": 2
      },
      {
        "Id": 34,
        "question": "جن نباتات میں سبز مایا موجود نہیں ہوتا ہے، انہیں کیا کہتے ہیں؟",
        "optionList": [
          "بے سبز پودے",
          "سوکھے پودے",
          "فاسد پودے",
          "بیج گھاس"
        ],
        "answer": 3
      },
      {
        "Id": 35,
        "question": "جن نباتات کی بیجوں پر قدرتی غلاف نہیں ہوتا اور ان میں پھل بھی نہیں لگتے ہیں، انہیں کیا کہتے ہیں؟",
        "optionList": [
          "بیجراح پودے",
          "بے پھل پودے",
          "بے بیج پودے",
          "بے پتی پودے"
        ],
        "answer": 4
      },
      {
        "Id": 36,
        "question": "جن نباتات کی بیجوں پر قدرتی غلاف موجود ہوتا ہے اور ان میں پھل بھی نہیں لگتے ہیں، انہیں کیا کہتے ہیں؟",
        "optionList": [
          "بیج دار پودے",
          "بے پھلی پودے",
          "پھولدار پودے",
          "قدرتی پودے"
        ],
        "answer": 1
      },
      {
        "Id": 37,
        "question": "حیاتی تنزل پذیر کچرے کا تجزیہ کس کی مدد سے آسانی سے ہوتا ہے؟",
        "optionList": [
          "روشنی",
          "مائکروسکوپ",
          "حرارت",
          "کیمیائی تجزیہ"
        ],
        "answer": 2
      },
      {
        "Id": 38,
        "question": "گردہ روزانہ نہ کتنا لیٹر خون چھانتا ہے؟",
        "optionList": [
          "1 لیٹر",
          "3 لیٹر",
          "5 لیٹر",
          "7 لیٹر"
        ],
        "answer": 3
      },
      {
        "Id": 39,
        "question": "انسانی دماغ کتنے خلیوں سے بنتا ہے؟",
        "optionList": [
          "100 سے زیادہ",
          "1,000 سے زیادہ",
          "10,000 سے زیادہ",
          "100,000 سے زیادہ"
        ],
        "answer": 3
      },
      {
        "Id": 40,
        "question": "پانچ لیٹر خون روزانہ گردوں سے کتنی بار چھانا جاتا ہے؟",
        "optionList": [
          "ایک بار",
          "دو بار",
          "تین بار",
          "چار بار"
        ],
        "answer": 2
      },
      {
        "Id": 41,
        "question": "سب سے ہلکی گیس کونسی ہے؟",
        "optionList": [
          "ہائیڈروجن",
          "نائٹروجن",
          "ہیلیم",
          "اکسیجن"
        ],
        "answer": 1
      },
      {
        "Id": 42,
        "question": "جل تھلیے نباتات کس گروپ سے تعلق رکھتے ہیں؟",
        "optionList": [
          "پتھر پودے",
          "گھاسیں",
          "درختیں",
          "پھولوں والے پودے"
        ],
        "answer": 2
      },
      {
        "Id": 43,
        "question": "انسان ایک منٹ میں کتنی بار سانس لیتا ہے؟",
        "optionList": [
          "تقریباً 10 بار",
          "تقریباً 20 بار",
          "تقریباً 30 بار",
          "تقریباً 40 بار"
        ],
        "answer": 3
      },
      {
        "Id": 44,
        "question": "بھارت کا کتنا فیصد حصہ جنگلات سے گھرا ہوا ہے؟",
        "optionList": [
          "18%",
          "24%",
          "36%",
          "42%"
        ],
        "answer": 2
      },
      {
        "Id": 45,
        "question": "وٹامن اے اور وٹامن ڈی کی کمی سے کونسا مرض ہوتا ہے؟",
        "optionList": [
          "رکن انزائم",
          "راتوں کا بینا دیکھنا",
          "سکرائی",
          "راتوں کا نظر نہ آنا"
        ],
        "answer": 3
      },
      {
        "Id": 46,
        "question": "گردے بناوٹ کے لحاظ سے کس شکل کے ہوتے ہیں؟",
        "optionList": [
          "مثلثی",
          "مربعی",
          "مخروطی",
          "گول"
        ],
        "answer": 4
      },
      {
        "Id": 47,
        "question": "گردے کے اندر والا حصہ کیا کہلاتا ہے؟",
        "optionList": [
          "کیڑا",
          "کمر",
          "بلب",
          "نیزہ"
        ],
        "answer": 2
      },
      {
        "Id": 48,
        "question": "الیکٹرک پنکھا کب اور کہاں ایجاد ہوا؟",
        "optionList": [
          "انگلستان میں اُنیسویں صدی میں",
          "امریکا میں بیسویں صدی میں",
          "چین میں اٹھارویں صدی میں",
          "روس میں اکیسویں صدی میں"
        ],
        "answer": 1
      },
      {
        "Id": 49,
        "question": "کس سیارے کے دن رات برابر ہوتے ہیں؟",
        "optionList": [
          "مشتری",
          "مریخ",
          "زمین",
          "وینس"
        ],
        "answer": 3
      },
      {
        "Id": 50,
        "question": "روئی سے کاغذ تیار کرنا کس کی ایجاد تھی؟",
        "optionList": [
          "چینی",
          "عربی",
          "مصری",
          "یونانی"
        ],
        "answer": 2
      },
      {
        "Id": 51,
        "question": "دماغ کے مطالعے کے علم کو کیا کہا جاتا ہے؟",
        "optionList": [
          "نیروفزیولوجی",
          "پسیکولوجی",
          "نوروسائنس",
          "بائیولوجی"
        ],
        "answer": 1
      },
      {
        "Id": 52,
        "question": "آگ بجھانے کے لیے کون سی گیس استعمال کی جاتی ہے؟",
        "optionList": [
          "ہیلیم",
          "ہائیڈروجن",
          "کربن ڈائی آکسائیڈ",
          "ہیکسین"
        ],
        "answer": 2
      },
      {
        "Id": 53,
        "question": "سوال امونیا گیس کن دو گیسوں کے تعامل سے بنتی ہے؟",
        "optionList": [
          "نائٹروجن اور ہائیڈروجن",
          "نائٹروجن اور اکسیجن",
          "ہائیڈروجن اور اکسیجن",
          "کربن ڈائی آکسائیڈ اور ہائیڈروجن"
        ],
        "answer": 1
      },
      {
        "Id": 54,
        "question": "کلورین گیس ہو اسے کتنی بھاری ہوتی ہے؟",
        "optionList": [
          "ہوا سے بھاری",
          "ہائیڈروجن سے بھاری",
          "نائٹروجن سے بھاری",
          "اکسیجن سے بھاری"
        ],
        "answer": 1
      },
      {
        "Id": 55,
        "question": "سب سے ہلکی دھات کونسی ہوتی ہے؟",
        "optionList": [
          "لوہا",
          "سونا",
          "چاندی",
          "پلادیم"
        ],
        "answer": 2
      },
      {
        "Id": 56,
        "question": "دنیا میں سب سے زیادہ قدرتی گیس کارذخیر و کس ملک میں ہے؟",
        "optionList": [
          "روسیہ",
          "امریکہ",
          "سعودی عرب",
          "چین"
        ],
        "answer": 1
      },
      {
        "Id": 57,
        "question": "نظریہ ارتقاء کا بانی کون تھا؟",
        "optionList": [
          "چارلز ڈارون",
          "آئنسٹائن",
          "ڈاروین",
          "لوئس پیسٹیر"
        ],
        "answer": 3
      },
      {
        "Id": 58,
        "question": "سب سے پہلے کو نسا جانور خلا میں گیا تھا؟",
        "optionList": [
          "میمون",
          "بندر",
          "بھالو",
          "گھوڑا"
        ],
        "answer": 2
      },
      {
        "Id": 59,
        "question": "سوال ایک عام انسان کا بلڈ پریشر عموما کنار بہتا ہے؟",
        "optionList": [
          "120/80",
          "90/60",
          "140/90",
          "150/100"
        ],
        "answer": 1
      },
      {
        "Id": 60,
        "question": "خون میں کتنے فیصد پانی ہوتا ہے؟",
        "optionList": [
          "50%",
          "60%",
          "70%",
          "80%"
        ],
        "answer": 3
      },
      {
        "Id": 61,
        "question": "انسانی جسم میں کتنی ہڈیاں اور جوڑ ہوتے ہیں؟",
        "optionList": [
          "دو سو چھ ہڈیاں اور دو سو تیس جوڑ",
          "300 ہڈیاں اور 400 جوڑ",
          "150 ہڈیاں اور 180 جوڑ",
          "250 ہڈیاں اور 300 جوڑ"
        ],
        "answer": 1
      },
      {
        "Id": 62,
        "question": "انسان نے سب سے پہلے کیا کاشت کیا؟",
        "optionList": [
          "گنا",
          "گندم",
          "بارلے",
          "کپاس"
        ],
        "answer": 2
      },
      {
        "Id": 63,
        "question": "کتایک منٹ میں کتنی بار سانس لیتا ہے؟",
        "optionList": [
          "12 بار",
          "15 بار",
          "18 بار",
          "20 بار"
        ],
        "answer": 2
      },
      {
        "Id": 64,
        "question": "دنیا میں سب سے پہلے کس انسان نے خلا میں سفر کیا؟",
        "optionList": [
          "نیل ارمسٹرانگ",
          "یوری گاگارین",
          "جان گلین",
          "بز اولڈرین"
        ],
        "answer": 2
      },
      {
        "Id": 65,
        "question": "کس سیارے پر سال سب سے لمبا ہوتا ہے؟",
        "optionList": [
          "مشتری",
          "ارض",
          "زمین",
          "مریخ"
        ],
        "answer": 1
      },
      {
        "Id": 66,
        "question": "مکڑی کی کتنی آنکھیں ہوتی ہیں؟",
        "optionList": [
          "4 آنکھیں",
          "6 آنکھیں",
          "8 آنکھیں",
          "10 آنکھیں"
        ],
        "answer": 3
      },
      {
        "Id": 67,
        "question": "پہلے خلاباز کا نام کیا ہے؟",
        "optionList": [
          "نیل ارمسٹرانگ",
          "یوری گاگارین",
          "جان گلین",
          "بز اولڈرین"
        ],
        "answer": 1
      },
      {
        "Id": 68,
        "question": "لیکلو میٹر سے کیا کام لیا جاتا ہے؟",
        "optionList": [
          "وقت کی پیمائش",
          "مسافت کی پیمائش",
          "برقی رو کی پیمائش",
          "وزن کی پیمائش"
        ],
        "answer": 2
      },
      {
        "Id": 69,
        "question": "واٹ کس کی اکائی ہے؟",
        "optionList": [
          "کام کی اکائی",
          "برقی طاقت کی اکائی",
          "برقی رو کی اکائی",
          "درجہ حرارت کی اکائی"
        ],
        "answer": 2
      },
      {
        "Id": 70,
        "question": "سب سے پہلے کس مسلمان سائنسدان نے دبے انسائیکلو پیڈیا مرتب کیا تھا؟",
        "optionList": [
          "ابن سینا",
          "الخوارزمی",
          "البرونی",
          "ابن الہیثم"
        ],
        "answer": 4
      },
      {
        "Id": 71,
        "question": "ریشم کا کیڑا عمر بھر میں کتنے گزریشم بنتا ہے؟",
        "optionList": [
          "1 بار",
          "2 بار",
          "3 بار",
          "4 بار"
        ],
        "answer": 3
      },
      {
        "Id": 72,
        "question": "ریشم کے کیڑے کی خاص اور مرغوب غذا کیا ہے؟",
        "optionList": [
          "لیف",
          "پھل",
          "لاہوری دال",
          "پتا گوبھی"
        ],
        "answer": 1
      },
      {
        "Id": 73,
        "question": "سب سے زیادہ تیز رفتاری سے سفر کرنے والی شے کونسی ہے؟",
        "optionList": [
          "بجلی",
          "ہوائی جہاز",
          "شوٹل",
          "روکیٹ"
        ],
        "answer": 3
      },
      {
        "Id": 74,
        "question": "عمل تنفس کے ذریعے کون سی گیس انسان خارج کرتا ہے؟",
        "optionList": [
          "کاربن ڈائی اکسائیڈ",
          "نائٹروجن",
          "اکسیجن",
          "میتین"
        ],
        "answer": 1
      },
      {
        "Id": 75,
        "question": "زمین سے قریب ترین فلکی کرہ کونسا ہے؟",
        "optionList": [
          "مریخ",
          "وینس",
          "یورینس",
          "قمر"
        ],
        "answer": 4
      },
      {
        "Id": 76,
        "question": "سب سے ملکی گیس کونسی ہے؟",
        "optionList": [
          "ہائیڈروجن",
          "نائٹروجن",
          "اکسیجن",
          "کاربن ڈائی اکسائیڈ"
        ],
        "answer": 1
      },
      {
        "Id": 77,
        "question": "بجلی کے جھٹکے سے آدمی اگر چپک جائے تو کونسی چیز سے الگ کیا جا سکتا ہے؟",
        "optionList": [
          "پلاسٹک",
          "لہسن",
          "برف",
          "پتھر"
        ],
        "answer": 3
      },
      {
        "Id": 78,
        "question": "جسم کا توازن کون برقرار رکھتا ہے؟",
        "optionList": [
          "کمر",
          "پاؤں",
          "آنکھیں",
          "پٹھے"
        ],
        "answer": 1
      },
      {
        "Id": 79,
        "question": "مکمل سورج گرہن زیادہ سے زیادہ کتنی دیر دیتا ہے؟",
        "optionList": [
          "۲۴ گھنٹے",
          "۱ سال",
          "۱۲ گھنٹے",
          "۶ مہینے"
        ],
        "answer": 2
      },
      {
        "Id": 80,
        "question": "تمبا کو میں کون ساز ہر یلا مادہ ہوتا ہے؟",
        "optionList": [
          "سیلوفین",
          "کیمیکل فائبر",
          "کپاس",
          "شیشہ"
        ],
        "answer": 3
      },
      {
        "Id": 81,
        "question": "روشنی ایک سیکنڈ میں تقریباً کتنا فاصلہ طے کرتی ہے؟",
        "optionList": [
          "۳۰,۰۰۰ کلومیٹر",
          "۳۰۰,۰۰۰ کلومیٹر",
          "۳۰۰,۰۰۰ کلومیٹر",
          "۳,۰۰۰,۰۰۰ کلومیٹر"
        ],
        "answer": 1
      },
      {
        "Id": 82,
        "question": "وہ کونسا ہوٹامن ہے جس کی کمی سے رات کا اندھاپن ہوتا ہے؟",
        "optionList": [
          "ملیبڈینیم",
          "سیلیسیم",
          "زنک",
          "فسفرس"
        ],
        "answer": 2
      },
      {
        "Id": 83,
        "question": "انسان کے سر میں کتنی ہڈیاں ہوتی ہیں؟",
        "optionList": [
          "۳۰",
          "۳۲",
          "۳۴",
          "۳۶"
        ],
        "answer": 2
      },
      {
        "Id": 84,
        "question": "انسان کے جسم میں سب سے بڑی ہڈی کونسی ہے؟",
        "optionList": [
          "ریڑھ کی ہڈی",
          "ٹھائی بون",
          "ہاتھ کی ہڈی",
          "پیر کی ہڈی"
        ],
        "answer": 1
      },
      {
        "Id": 85,
        "question": "خون کی کمی سے انسان کو کون سا مرض لاحق ہو جاتا ہے؟",
        "optionList": [
          "دماغی روگ",
          "زردی",
          "فیفر",
          "آنیمیا"
        ],
        "answer": 4
      },
      {
        "Id": 86,
        "question": "کونسا تینوں ٹاپوں کا سب سے پہلے دریافت ہوا؟",
        "optionList": [
          "مری کوری",
          "کیلی فوکس",
          "یورینس ڈویس",
          "یورینس ڈوندا"
        ],
        "answer": 1
      },
      {
        "Id": 87,
        "question": "وہ جھیل کس ملک میں ہے جس کی سطح کا پانی شربت کی طرح میٹھا ہے مگر سطح کے تین فٹ نیچے کا پانی کڑوا ہے؟",
        "optionList": [
          "تھائی لینڈ",
          "بوسنیا اور ہرزیگووینا",
          "چین",
          "روس"
        ],
        "answer": 2
      },
      {
        "Id": 88,
        "question": "وہ کون سا ملک ہے جہاں چڑیا نہیں پائی جاتی ہے؟",
        "optionList": [
          "یمن",
          "جزائر",
          "اسپین",
          "پیرو"
        ],
        "answer": 1
      },
      {
        "Id": 89,
        "question": "انسان کے بعد دنیا کیذہین ترین مخلوق کونسی ہے؟",
        "optionList": [
          "گوریلا",
          "چمپانزی",
          "چوتھی آنکھ",
          "چیتا"
        ],
        "answer": 2
      },
      {
        "Id": 90,
        "question": "دنیا کے سب سے چھوٹے پرندے کا نام بتائیں؟",
        "optionList": [
          "کوہرا",
          "مرغابی",
          "چھوٹی مور",
          "سونچ"
        ],
        "answer": 3
      },
      {
        "Id": 91,
        "question": "شہد کی مکھی کی کتنی آنکھیں ہوتی ہیں؟",
        "optionList": [
          "۱",
          "۲",
          "۳",
          "۴"
        ],
        "answer": 3
      }
    ];

    return questionList;

  }
}