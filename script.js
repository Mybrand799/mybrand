// دالة إرسال الطلب تلقائياً إلى رقم الواتساب المخصص للبراند
function sendWhatsApp(productName) {
    // رقم هاتفك بالصيغة الدولية وبدون أصفار إضافية في البداية كما تطلب الـ API لـ Meta
    const phoneNumber = "967776834023"; 
    
    // رسالة احترافية ومجهزة تظهر لك فوراً عندما يضغط العميل على الزر
    const baseMessage = `مرحباً براند AL-IMTIYAZ 👕\nلقد تصفحت موقعكم الإلكتروني، وأود الاستفسار عن تفاصيل ومقاسات طقم:\n👉 (${productName})`;
    
    // تشفير الرسالة البرمجية لضمان سلامة الرموز والمسافات وعلامات السطور في الرابط (URL Encoding)
    const encodedMessage = encodeURIComponent(baseMessage);
    
    // إنشاء رابط محادثة واتساب الرسمي والآمن للويب والهواتف
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // فتح الرابط في نافذة جديدة مباشرة حتى لا يغلق العميل واجهة موقعك
    window.open(whatsappURL, '_blank');
}