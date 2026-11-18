// Animações de entrada de cada slide (não depende dos textos)
(function () {
  var SPEC = [[{"f": 0, "p": "", "fx": "leaf", "dur": 2200, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "fade", "dur": 1000, "delay": 200, "ease": "out"}, {"f": 1, "p": "1.0", "fx": "rise", "dur": 700, "delay": 440, "ease": "out"}, {"f": 1, "p": "1.1", "fx": "rise", "dur": 700, "delay": 560, "ease": "out"}, {"f": 1, "p": "1.2", "fx": "sweep", "dur": 1200, "delay": 700, "ease": "out"}, {"f": 1, "p": "1.3", "fx": "rise", "dur": 700, "delay": 920, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 3, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 3, "p": "1.0", "fx": "rise", "dur": 700, "delay": 320, "ease": "out"}, {"f": 3, "p": "1.1", "fx": "rise", "dur": 700, "delay": 440, "ease": "out"}, {"f": 3, "p": "1.2", "fx": "rise", "dur": 700, "delay": 560, "ease": "out"}], [{"f": 0, "p": "", "fx": "leaf", "dur": 2200, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "pop", "dur": 800, "delay": 150, "ease": "back"}, {"f": 1, "p": "0", "fx": "fade", "dur": 400, "delay": 150, "ease": "out"}, {"f": 1, "p": "0.0", "fx": "rise", "dur": 700, "delay": 550, "ease": "out"}, {"f": 1, "p": "1.0", "fx": "left", "dur": 700, "delay": 700, "ease": "out"}, {"f": 1, "p": "1.1", "fx": "left", "dur": 700, "delay": 810, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 3, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 3, "p": "1.0", "fx": "rise", "dur": 700, "delay": 320, "ease": "out"}, {"f": 3, "p": "1.0.0", "fx": "count", "dur": 1600, "delay": 420, "ease": "out"}, {"f": 3, "p": "1.0.0", "fx": "rise", "dur": 700, "delay": 420, "ease": "out"}, {"f": 3, "p": "1.1", "fx": "rise", "dur": 700, "delay": 440, "ease": "out"}, {"f": 3, "p": "1.1.0", "fx": "count", "dur": 1600, "delay": 540, "ease": "out"}, {"f": 3, "p": "1.1.0", "fx": "rise", "dur": 700, "delay": 540, "ease": "out"}, {"f": 3, "p": "1.2", "fx": "rise", "dur": 700, "delay": 560, "ease": "out"}, {"f": 3, "p": "1.2.0", "fx": "count", "dur": 1600, "delay": 660, "ease": "out"}, {"f": 3, "p": "1.2.0", "fx": "rise", "dur": 700, "delay": 660, "ease": "out"}, {"f": 3, "p": "1.3", "fx": "rise", "dur": 700, "delay": 680, "ease": "out"}, {"f": 3, "p": "1.3.0", "fx": "count", "dur": 1600, "delay": 780, "ease": "out"}, {"f": 3, "p": "1.3.0", "fx": "rise", "dur": 700, "delay": 780, "ease": "out"}, {"f": 3, "p": "2", "fx": "rise", "dur": 700, "delay": 920, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 3, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 3, "p": "1.0.0", "fx": "fade", "dur": 800, "delay": 150, "ease": "out"}, {"f": 3, "p": "1.0.1.0", "fx": "fade", "dur": 800, "delay": 150, "ease": "out"}, {"f": 3, "p": "1.0.1.1.0", "fx": "grow", "dur": 1000, "delay": 300, "ease": "out"}, {"f": 3, "p": "1.0.2.0", "fx": "fade", "dur": 800, "delay": 270, "ease": "out"}, {"f": 3, "p": "1.0.2.1.0", "fx": "grow", "dur": 1000, "delay": 410, "ease": "out"}, {"f": 3, "p": "1.0.3.0", "fx": "fade", "dur": 800, "delay": 390, "ease": "out"}, {"f": 3, "p": "1.0.3.1.0", "fx": "grow", "dur": 1000, "delay": 520, "ease": "out"}, {"f": 3, "p": "1.0.4.0", "fx": "fade", "dur": 800, "delay": 510, "ease": "out"}, {"f": 3, "p": "1.0.4.1.0", "fx": "grow", "dur": 1000, "delay": 630, "ease": "out"}, {"f": 3, "p": "1.0.5.0", "fx": "fade", "dur": 800, "delay": 630, "ease": "out"}, {"f": 3, "p": "1.0.5.1.0", "fx": "grow", "dur": 1000, "delay": 740, "ease": "out"}, {"f": 3, "p": "1.0.6.0", "fx": "fade", "dur": 800, "delay": 750, "ease": "out"}, {"f": 3, "p": "1.0.6.1.0", "fx": "grow", "dur": 1000, "delay": 850, "ease": "out"}, {"f": 3, "p": "1.0.7.0", "fx": "fade", "dur": 800, "delay": 870, "ease": "out"}, {"f": 3, "p": "1.0.7.1.0", "fx": "grow", "dur": 1000, "delay": 960, "ease": "out"}, {"f": 3, "p": "1.1.0", "fx": "left", "dur": 700, "delay": 260, "ease": "out"}, {"f": 3, "p": "1.1.1", "fx": "left", "dur": 700, "delay": 370, "ease": "out"}, {"f": 3, "p": "1.1.2", "fx": "left", "dur": 700, "delay": 480, "ease": "out"}], [{"f": 0, "p": "", "fx": "leaf", "dur": 2200, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "pop", "dur": 800, "delay": 150, "ease": "back"}, {"f": 1, "p": "0", "fx": "fade", "dur": 400, "delay": 150, "ease": "out"}, {"f": 1, "p": "0.0", "fx": "rise", "dur": 700, "delay": 550, "ease": "out"}, {"f": 1, "p": "1.0", "fx": "left", "dur": 700, "delay": 700, "ease": "out"}, {"f": 1, "p": "1.1", "fx": "left", "dur": 700, "delay": 810, "ease": "out"}, {"f": 1, "p": "1.2.0", "fx": "pop", "dur": 600, "delay": 1130, "ease": "back"}, {"f": 1, "p": "1.2.0", "fx": "fade", "dur": 300, "delay": 1130, "ease": "out"}, {"f": 1, "p": "1.2.1", "fx": "pop", "dur": 600, "delay": 1240, "ease": "back"}, {"f": 1, "p": "1.2.1", "fx": "fade", "dur": 300, "delay": 1240, "ease": "out"}, {"f": 1, "p": "1.2.2", "fx": "pop", "dur": 600, "delay": 1350, "ease": "back"}, {"f": 1, "p": "1.2.2", "fx": "fade", "dur": 300, "delay": 1350, "ease": "out"}, {"f": 1, "p": "1.2.3", "fx": "pop", "dur": 600, "delay": 1460, "ease": "back"}, {"f": 1, "p": "1.2.3", "fx": "fade", "dur": 300, "delay": 1460, "ease": "out"}, {"f": 1, "p": "1.3", "fx": "fade", "dur": 800, "delay": 1590, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "fade", "dur": 800, "delay": 150, "ease": "out"}, {"f": 1, "p": "1", "fx": "pop", "dur": 600, "delay": 690, "ease": "back"}, {"f": 1, "p": "1", "fx": "fade", "dur": 300, "delay": 690, "ease": "out"}, {"f": 1, "p": "2", "fx": "pop", "dur": 600, "delay": 800, "ease": "back"}, {"f": 1, "p": "2", "fx": "fade", "dur": 300, "delay": 800, "ease": "out"}, {"f": 4, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 4, "p": "1.0.0", "fx": "left", "dur": 700, "delay": 260, "ease": "out"}, {"f": 4, "p": "1.0.1", "fx": "left", "dur": 700, "delay": 370, "ease": "out"}, {"f": 4, "p": "1.0.2", "fx": "left", "dur": 700, "delay": 480, "ease": "out"}, {"f": 4, "p": "1.0.3", "fx": "left", "dur": 700, "delay": 590, "ease": "out"}, {"f": 4, "p": "1.1", "fx": "right", "dur": 900, "delay": 350, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "fade", "dur": 800, "delay": 150, "ease": "out"}, {"f": 1, "p": "1", "fx": "pop", "dur": 600, "delay": 690, "ease": "back"}, {"f": 1, "p": "1", "fx": "fade", "dur": 300, "delay": 690, "ease": "out"}, {"f": 4, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 4, "p": "1.0", "fx": "rise", "dur": 700, "delay": 320, "ease": "out"}, {"f": 4, "p": "1.0.1", "fx": "count", "dur": 1600, "delay": 420, "ease": "out"}, {"f": 4, "p": "1.1", "fx": "rise", "dur": 700, "delay": 440, "ease": "out"}, {"f": 4, "p": "1.1.1", "fx": "count", "dur": 1600, "delay": 540, "ease": "out"}, {"f": 4, "p": "1.2", "fx": "pop", "dur": 600, "delay": 800, "ease": "back"}, {"f": 4, "p": "1.2", "fx": "fade", "dur": 300, "delay": 800, "ease": "out"}, {"f": 4, "p": "1.2.1", "fx": "count", "dur": 1600, "delay": 900, "ease": "out"}, {"f": 4, "p": "1.2.2", "fx": "count", "dur": 1600, "delay": 1000, "ease": "out"}, {"f": 4, "p": "2.0", "fx": "fade", "dur": 800, "delay": 870, "ease": "out"}, {"f": 4, "p": "2.1.0", "fx": "rise", "dur": 700, "delay": 1040, "ease": "out"}, {"f": 4, "p": "2.1.1", "fx": "rise", "dur": 700, "delay": 1160, "ease": "out"}, {"f": 4, "p": "2.1.2", "fx": "rise", "dur": 700, "delay": 1280, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "fade", "dur": 800, "delay": 150, "ease": "out"}, {"f": 1, "p": "1", "fx": "pop", "dur": 600, "delay": 690, "ease": "back"}, {"f": 1, "p": "1", "fx": "fade", "dur": 300, "delay": 690, "ease": "out"}, {"f": 4, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 4, "p": "1.0", "fx": "left", "dur": 700, "delay": 260, "ease": "out"}, {"f": 4, "p": "1.1", "fx": "right", "dur": 900, "delay": 470, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "fade", "dur": 800, "delay": 150, "ease": "out"}, {"f": 1, "p": "1", "fx": "pop", "dur": 600, "delay": 690, "ease": "back"}, {"f": 1, "p": "1", "fx": "fade", "dur": 300, "delay": 690, "ease": "out"}, {"f": 1, "p": "2", "fx": "pop", "dur": 600, "delay": 800, "ease": "back"}, {"f": 1, "p": "2", "fx": "fade", "dur": 300, "delay": 800, "ease": "out"}, {"f": 4, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 4, "p": "1.0.0", "fx": "left", "dur": 700, "delay": 260, "ease": "out"}, {"f": 4, "p": "1.0.1", "fx": "left", "dur": 700, "delay": 370, "ease": "out"}, {"f": 4, "p": "1.0.2", "fx": "left", "dur": 700, "delay": 480, "ease": "out"}, {"f": 4, "p": "1.0.3", "fx": "rise", "dur": 700, "delay": 800, "ease": "out"}, {"f": 4, "p": "1.0.3.0", "fx": "count", "dur": 1600, "delay": 900, "ease": "out"}, {"f": 4, "p": "1.1", "fx": "right", "dur": 900, "delay": 350, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "fade", "dur": 800, "delay": 150, "ease": "out"}, {"f": 1, "p": "1", "fx": "pop", "dur": 600, "delay": 690, "ease": "back"}, {"f": 1, "p": "1", "fx": "fade", "dur": 300, "delay": 690, "ease": "out"}, {"f": 1, "p": "2", "fx": "pop", "dur": 600, "delay": 800, "ease": "back"}, {"f": 1, "p": "2", "fx": "fade", "dur": 300, "delay": 800, "ease": "out"}, {"f": 4, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 4, "p": "1.0.0", "fx": "left", "dur": 700, "delay": 260, "ease": "out"}, {"f": 4, "p": "1.0.1", "fx": "drop", "dur": 400, "delay": 560, "ease": "out"}, {"f": 4, "p": "1.0.2", "fx": "left", "dur": 700, "delay": 480, "ease": "out"}, {"f": 4, "p": "1.0.3", "fx": "drop", "dur": 400, "delay": 800, "ease": "out"}, {"f": 4, "p": "1.0.4", "fx": "left", "dur": 700, "delay": 700, "ease": "out"}, {"f": 4, "p": "1.1", "fx": "right", "dur": 900, "delay": 350, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "fade", "dur": 800, "delay": 150, "ease": "out"}, {"f": 1, "p": "1", "fx": "pop", "dur": 600, "delay": 690, "ease": "back"}, {"f": 1, "p": "1", "fx": "fade", "dur": 300, "delay": 690, "ease": "out"}, {"f": 1, "p": "2", "fx": "pop", "dur": 600, "delay": 800, "ease": "back"}, {"f": 1, "p": "2", "fx": "fade", "dur": 300, "delay": 800, "ease": "out"}, {"f": 4, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 4, "p": "1.0", "fx": "rise", "dur": 700, "delay": 320, "ease": "out"}, {"f": 4, "p": "1.1", "fx": "rise", "dur": 700, "delay": 560, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "fade", "dur": 800, "delay": 150, "ease": "out"}, {"f": 1, "p": "1", "fx": "pop", "dur": 600, "delay": 690, "ease": "back"}, {"f": 1, "p": "1", "fx": "fade", "dur": 300, "delay": 690, "ease": "out"}, {"f": 4, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 4, "p": "1.0.0", "fx": "left", "dur": 700, "delay": 260, "ease": "out"}, {"f": 4, "p": "1.0.1", "fx": "left", "dur": 700, "delay": 370, "ease": "out"}, {"f": 4, "p": "1.0.2", "fx": "left", "dur": 700, "delay": 480, "ease": "out"}, {"f": 4, "p": "1.1", "fx": "right", "dur": 900, "delay": 350, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "fade", "dur": 800, "delay": 150, "ease": "out"}, {"f": 1, "p": "1", "fx": "pop", "dur": 600, "delay": 690, "ease": "back"}, {"f": 1, "p": "1", "fx": "fade", "dur": 300, "delay": 690, "ease": "out"}, {"f": 1, "p": "2", "fx": "pop", "dur": 600, "delay": 800, "ease": "back"}, {"f": 1, "p": "2", "fx": "fade", "dur": 300, "delay": 800, "ease": "out"}, {"f": 4, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 4, "p": "1.0.0", "fx": "left", "dur": 700, "delay": 260, "ease": "out"}, {"f": 4, "p": "1.0.1", "fx": "left", "dur": 700, "delay": 370, "ease": "out"}, {"f": 4, "p": "1.0.2", "fx": "left", "dur": 700, "delay": 480, "ease": "out"}, {"f": 4, "p": "1.1", "fx": "right", "dur": 900, "delay": 350, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "fade", "dur": 800, "delay": 150, "ease": "out"}, {"f": 1, "p": "1", "fx": "pop", "dur": 600, "delay": 690, "ease": "back"}, {"f": 1, "p": "1", "fx": "fade", "dur": 300, "delay": 690, "ease": "out"}, {"f": 4, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 4, "p": "1.0", "fx": "rise", "dur": 700, "delay": 200, "ease": "out"}], [], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 3, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 3, "p": "1.0", "fx": "rise", "dur": 700, "delay": 320, "ease": "out"}, {"f": 3, "p": "1.1", "fx": "rise", "dur": 700, "delay": 440, "ease": "out"}, {"f": 3, "p": "1.2", "fx": "rise", "dur": 700, "delay": 560, "ease": "out"}], [{"f": 0, "p": "", "fx": "leaf", "dur": 2200, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "pop", "dur": 800, "delay": 150, "ease": "back"}, {"f": 1, "p": "0", "fx": "fade", "dur": 400, "delay": 150, "ease": "out"}, {"f": 1, "p": "0.0", "fx": "rise", "dur": 700, "delay": 550, "ease": "out"}, {"f": 1, "p": "1.0", "fx": "left", "dur": 700, "delay": 700, "ease": "out"}, {"f": 1, "p": "1.1", "fx": "left", "dur": 700, "delay": 810, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 3, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 3, "p": "1.0.0", "fx": "pop", "dur": 600, "delay": 360, "ease": "back"}, {"f": 3, "p": "1.0.0", "fx": "fade", "dur": 300, "delay": 360, "ease": "out"}, {"f": 3, "p": "1.0.1", "fx": "pop", "dur": 600, "delay": 470, "ease": "back"}, {"f": 3, "p": "1.0.1", "fx": "fade", "dur": 300, "delay": 470, "ease": "out"}, {"f": 3, "p": "1.0.2", "fx": "pop", "dur": 600, "delay": 580, "ease": "back"}, {"f": 3, "p": "1.0.2", "fx": "fade", "dur": 300, "delay": 580, "ease": "out"}, {"f": 3, "p": "1.1", "fx": "right", "dur": 900, "delay": 350, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 3, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 3, "p": "1.0.0", "fx": "pop", "dur": 600, "delay": 360, "ease": "back"}, {"f": 3, "p": "1.0.0", "fx": "fade", "dur": 300, "delay": 360, "ease": "out"}, {"f": 3, "p": "1.0.1", "fx": "pop", "dur": 600, "delay": 470, "ease": "back"}, {"f": 3, "p": "1.0.1", "fx": "fade", "dur": 300, "delay": 470, "ease": "out"}, {"f": 3, "p": "1.0.2", "fx": "pop", "dur": 600, "delay": 580, "ease": "back"}, {"f": 3, "p": "1.0.2", "fx": "fade", "dur": 300, "delay": 580, "ease": "out"}, {"f": 3, "p": "1.1", "fx": "right", "dur": 900, "delay": 350, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 3, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 3, "p": "1.0.0", "fx": "fade", "dur": 800, "delay": 150, "ease": "out"}, {"f": 3, "p": "1.0.1", "fx": "left", "dur": 700, "delay": 260, "ease": "out"}, {"f": 3, "p": "1.0.2", "fx": "left", "dur": 700, "delay": 370, "ease": "out"}, {"f": 3, "p": "1.0.3", "fx": "left", "dur": 700, "delay": 480, "ease": "out"}, {"f": 3, "p": "1.0.4", "fx": "left", "dur": 700, "delay": 560, "ease": "out"}, {"f": 3, "p": "1.0.4", "fx": "glow", "dur": 1200, "delay": 1600, "ease": "out"}, {"f": 3, "p": "1.0.5", "fx": "left", "dur": 700, "delay": 700, "ease": "out"}, {"f": 3, "p": "1.0.6", "fx": "left", "dur": 700, "delay": 810, "ease": "out"}, {"f": 3, "p": "1.0.7", "fx": "left", "dur": 700, "delay": 920, "ease": "out"}, {"f": 3, "p": "1.0.8", "fx": "left", "dur": 700, "delay": 1030, "ease": "out"}, {"f": 3, "p": "1.1.0", "fx": "fade", "dur": 800, "delay": 270, "ease": "out"}, {"f": 3, "p": "1.1.1", "fx": "left", "dur": 700, "delay": 370, "ease": "out"}, {"f": 3, "p": "1.1.2", "fx": "left", "dur": 700, "delay": 480, "ease": "out"}, {"f": 3, "p": "1.1.3", "fx": "left", "dur": 700, "delay": 590, "ease": "out"}, {"f": 3, "p": "1.1.4", "fx": "left", "dur": 700, "delay": 650, "ease": "out"}, {"f": 3, "p": "1.1.4", "fx": "glow", "dur": 1200, "delay": 1600, "ease": "out"}, {"f": 3, "p": "1.1.5", "fx": "left", "dur": 700, "delay": 810, "ease": "out"}, {"f": 3, "p": "1.1.6", "fx": "left", "dur": 700, "delay": 920, "ease": "out"}, {"f": 3, "p": "1.1.7", "fx": "left", "dur": 700, "delay": 1030, "ease": "out"}, {"f": 3, "p": "2", "fx": "fade", "dur": 800, "delay": 1590, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 3, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 3, "p": "1.0", "fx": "left", "dur": 700, "delay": 260, "ease": "out"}, {"f": 3, "p": "1.1.0.0", "fx": "left", "dur": 700, "delay": 260, "ease": "out"}, {"f": 3, "p": "1.1.0.1", "fx": "drop", "dur": 400, "delay": 560, "ease": "out"}, {"f": 3, "p": "1.1.0.2", "fx": "left", "dur": 700, "delay": 480, "ease": "out"}, {"f": 3, "p": "1.1.0.3", "fx": "drop", "dur": 400, "delay": 800, "ease": "out"}, {"f": 3, "p": "1.1.0.4", "fx": "left", "dur": 700, "delay": 700, "ease": "out"}], [{"f": 0, "p": "", "fx": "sweep", "dur": 900, "delay": 0, "ease": "out"}, {"f": 3, "p": "0", "fx": "left", "dur": 700, "delay": 100, "ease": "out"}, {"f": 3, "p": "1", "fx": "left", "dur": 700, "delay": 260, "ease": "out"}, {"f": 3, "p": "2", "fx": "right", "dur": 900, "delay": 350, "ease": "out"}], [{"f": 0, "p": "", "fx": "leaf", "dur": 2200, "delay": 0, "ease": "out"}, {"f": 1, "p": "0", "fx": "fade", "dur": 1000, "delay": 200, "ease": "out"}, {"f": 1, "p": "1.0", "fx": "pop", "dur": 600, "delay": 470, "ease": "back"}, {"f": 1, "p": "1.0", "fx": "fade", "dur": 300, "delay": 470, "ease": "out"}, {"f": 1, "p": "1.1", "fx": "sweep", "dur": 1200, "delay": 700, "ease": "out"}, {"f": 1, "p": "1.2", "fx": "rise", "dur": 700, "delay": 920, "ease": "out"}, {"f": 1, "p": "1.3", "fx": "rise", "dur": 700, "delay": 1040, "ease": "out"}]];
  var OUT = 'cubic-bezier(.2,.7,.2,1)', BACK = 'cubic-bezier(.34,1.56,.64,1)';
  var K = {
    rise: [{ opacity: 0, transform: 'translateY(48px)' }, { opacity: 1, transform: 'none' }],
    fade: [{ opacity: 0 }, { opacity: 1 }],
    left: [{ opacity: 0, transform: 'translateX(-80px)' }, { opacity: 1, transform: 'none' }],
    right: [{ opacity: 0, transform: 'translateX(160px) rotate(4deg)' }, { opacity: 1, transform: 'none' }],
    pop: [{ transform: 'scale(0.3)' }, { transform: 'none' }],
    drop: [{ opacity: 0, transform: 'translateY(-24px)' }, { opacity: 1, transform: 'none' }],
    sweep: [{ transform: 'translateX(-1920px)' }, { transform: 'none' }],
    grow: [{ transform: 'translateX(-1100px)' }, { transform: 'none' }],
    leaf: [{ opacity: 0, transform: 'translate(120px,-80px) rotate(-12deg)' }, { opacity: 1, transform: 'none' }],
    glow: [{ boxShadow: '0 0 0 0 rgba(166,206,57,0.9)' }, { boxShadow: '0 0 0 18px rgba(166,206,57,0)' }]
  };
  var slides = [], state = [];

  function frames(slide) {
    var all = slide.querySelectorAll('[data-frame-id]'), out = [];
    for (var i = 0; i < all.length; i++) {
      if (!all[i].parentElement.closest('[data-frame-id]')) out.push(all[i]);
    }
    return out;
  }
  function find(slide, it) {
    var fr = frames(slide)[it.f];
    if (!fr) return null;
    if (!it.p) return fr.firstElementChild;
    return fr.querySelector('[data-node-path="' + it.p + '"]');
  }
  function textNode(el) {
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) if (/\d/.test(n.nodeValue)) return n;
    return null;
  }
  function countUp(el, it, st) {
    var n = textNode(el);
    if (!n) return;
    var orig = n.nodeValue, m = orig.match(/\d[\d.]*/);
    if (!m) return;
    var target = parseInt(m[0].replace(/\./g, ''), 10);
    if (!target) return;
    var fmt = function (v) { return m[0].indexOf('.') >= 0 ? v.toLocaleString('pt-BR') : String(v); };
    var set = function (v) { n.nodeValue = orig.replace(m[0], fmt(v)); };
    set(0);
    st.restore.push(function () { n.nodeValue = orig; });
    st.timers.push(setTimeout(function () {
      var t0 = performance.now();
      (function tick(now) {
        var t = Math.min(1, (now - t0) / it.dur), e = 1 - Math.pow(1 - t, 3);
        set(Math.round(target * e));
        if (t < 1 && st.on) st.raf = requestAnimationFrame(tick);
      })(t0);
    }, it.delay));
  }
  function prepare(i) {
    var st = state[i];
    if (st.ready) return;
    st.ready = true; st.anims = []; st.timers = []; st.restore = [];
    (SPEC[i] || []).forEach(function (it) {
      var el = find(slides[i], it);
      if (!el || it.fx === 'count') return;
      try {
        var a = el.animate(K[it.fx], { duration: it.dur, delay: it.delay, easing: it.ease === 'back' ? BACK : OUT, fill: 'both' });
        a.pause(); a.currentTime = 0;
        st.anims.push(a);
      } catch (e) {}
    });
  }
  function play(i) {
    var st = state[i];
    if (st.on) return;
    prepare(i);
    st.on = true;
    st.anims.forEach(function (a) { a.currentTime = 0; a.play(); });
    (SPEC[i] || []).forEach(function (it) {
      if (it.fx !== 'count') return;
      var el = find(slides[i], it);
      if (el) countUp(el, it, st);
    });
  }
  function reset(i) {
    var st = state[i];
    if (!st.ready) return;
    st.on = false; st.ready = false;
    (st.anims || []).forEach(function (a) { try { a.cancel(); } catch (e) {} });
    (st.timers || []).forEach(clearTimeout);
    if (st.raf) cancelAnimationFrame(st.raf);
    (st.restore || []).forEach(function (f) { f(); });
  }
  function init() {
    slides = Array.prototype.slice.call(document.querySelectorAll('section.deck-slide'));
    slides.forEach(function () { state.push({}); });
    var stage = function () { return document.documentElement.classList.contains('deck-stage'); };
    var sync = function () {
      if (!stage()) return;
      slides.forEach(function (s, i) {
        if (s.hasAttribute('data-off')) reset(i);
        else if (!s.hasAttribute('data-leaving')) play(i);
      });
    };
    new MutationObserver(sync).observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['data-off', 'data-leaving', 'class'] });
    setTimeout(sync, 0);
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        if (stage()) return;
        entries.forEach(function (en) {
          var i = slides.indexOf(en.target);
          if (i < 0) return;
          if (en.intersectionRatio >= 0.55) play(i);
          else if (en.intersectionRatio > 0) { if (!state[i].on) prepare(i); }
          else reset(i);
        });
      }, { threshold: [0, 0.01, 0.55] });
      slides.forEach(function (s) { io.observe(s); });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
