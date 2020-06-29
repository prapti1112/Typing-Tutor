from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    harry_potter = '''October arrived, spreading a damp chill over the grounds and into the castle. Madam Pomfrey, the nurse, was kept busy by a sudden spate of colds among the staff and students. Her Pepperup potion worked instantly, though it left the drinker smoking at the ears for several hours afterward. Ginny Weasley, who had been looking pale, was bullied into taking some by Percy. The steam pouring from under her vivid hair gave the impression that her whole head was on fire.'''
    divergent = '''Light pours in from all angles, and the city unfolds around us, glass buildings and the arc of train tracks, and we are high above it. I haven’t seen a blue sky in a long time, so when it spreads out above me, I feel the breath catch in my lungs and the effect is dizzying. Then the wind starts. It blows so hard I have to lean against Four to stay on my feet. He removes his hand from mine and wraps his arm around my shoulders instead.'''
    lord_of_rings = '''The Men of Bree were brown-haired, broad, and rather short, cheerful and independent: they belonged to nobody but themselves; but they were more friendly and familiar with Hobbits, Dwarves, Elves, and other inhabitants of the world about them than was (or is) usual with Big People. According to their own tales they were the original inhabitants and were the descendants of the first Men that ever wandered into the West of the middleworld. '''
    wheel_of_time = '''Late-morning light made small pools beneath the windows. No cooking smells came from the kitchen; there were no fires lit anywhere in the village, and even coals banked in ashes had been doused. No point in giving the gift of fire easy to hand. The Tinker-he sometimes wondered whether it was proper to think of Aram that way any longer, but a man could not stop being what he was, sword or no-stood against the wall by the front door, atching Perrin. What did the man expect? What did he want?'''
    wizard_of_oz = '''The tinsmiths looked the Woodman over carefully and then answered that they thought they could mend him so he would be as good as ever. So they set to work in one of the big yellow rooms of the castle and worked for three days and four nights, hammering and twisting and bending and soldering and polishing and pounding at the legs and body and head of the Tin Woodman, until at last he was straightened out into his old form, and his joints worked as well as ever.'''
    previousChoice = ""
    try:
        textChoice = request.POST['books']
    except KeyError:
        textChoice = harry_potter
    if textChoice == '1':
        textChoice = divergent
    elif textChoice == '2':
        textChoice = lord_of_rings
    elif textChoice == '3':
        textChoice = wheel_of_time
    elif textChoice == '4':
        textChoice = wizard_of_oz
    typingText = '_'.join(textChoice.split())
    return render(request, './practice/practice.html', {'typingText': typingText, 'wpm': 0})


def lesson(request):
    return render(request, './practice/course_lessons.html')


def overview(request):
    return render(request, './practice/course_overview.html')


def tanscribe(request):
    return render(request, './practice/course_transcribe.html')
