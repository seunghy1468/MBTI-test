
var num = 1;
// 문제
var q = {
    1: { "title": "데이트 약속을 잡았는데 어떻게 할까? 코로나 때문에 어쩔 수 없이 데이트를 취소 해야하나? 집에서 넷플릭스나 볼까?", "type": "EI", "A": "방역수칙을 잘 지키면서 데이트하면 안전해! 약속을 잡았으니 나가서 데이트하자.", "B": "집에서도 충분히 데이트 할 수 있어! 집에서 데이트를 한다." },
    2: { "title": "일을 하던 도중에 갑자기 급한 이슈가 생겨 일을 보류해야 한다면, 당신은 어떻게 해야할까?", "type": "SN", "A": "계획의 우선 순위를 먼저 정해서 중요한 일을 먼저 한다.", "B": "이미 계획했던 일 먼저! 일을 먼저 끝내고 다음 일을 처리한다." },
    3: { "title": "올해 내 목표는 자기개발. 나는 어떤 스타일로 자기개발을 하는 사람일까?", "type": "TF", "A": "올해 이루고 싶은 일을 꼼꼼히 기록하고, 계획에 도움이 될 만한 유명한 강사의 강의를 찾아본다.", "B": "세상은 생각대로 돌아가지 않는다! 그러니 우선은 아무거나 생각난 것 먼저 실행해본다." },
    4: { "title": "당신의 여행계획은 어떠한가?", "type": "JP", "A": "꼼꼼하고 차분히 여행 일정을 세우는 편이다.", "B": "대략적인 여행 계획을 작성하여 즉흥적으로 여행의 묘미를 즐긴다." },
    5: { "title": "인생에서 결정의 순간이 오면, 감성과 이성! 무엇이 더 중요한가?", "type": "EI", "A": "이성적으로 처리해야 시행착오를 덜 겪는다. 그래서 이성적인 결정이 중요하다.", "B": "이성을 앞세워 이것 저것 알아보다가 늦을 수 도 있다! 순간적인 느낌으로 결정한다." },
    6: { "title": "처음 만나는 사람들과 있을 때, 함께 대화를 한다면 당신은 어떤 타입인가?", "type": "SN", "A": "처음엔 쭈뼛거려도 유쾌하게 대화에 참여한다.", "B": "그들의 대화 중간에 참여하기가 어렵다." },
    7: { "title": "비현실적이지만, 가끔은 흥미로운 상상이나 몽상을 하며 시간을 보내는가?", "type": "TF", "A": "종종 상상을 하며 시간을 보낸적이 있다. 특히 영화를 보고나면 더욱 그렇다.", "B": "상상보다 현실에 대해 이야기를 하는 것을 선호한다." },
    8: { "title": "사람이 많은 도시와 사람이 적고 조용한 공원 중 당신은 어디를 선호 하는가?", "type": "JP", "A": " 조용하고 차분한 공간을 더 선호한다.", "B": "바쁘고 북적거리는 공간을 활기가 있어 더 선호한다." },
    9: { "title": "당신은 직장발령 때문에 해외로 오랫동안 나가게 되었다. 동료들에게 감사인사를 하려고 선물을 준비하면서 어떤방식으로 준비할까?", "type": "EI", "A": "그동안 같이 시간을 보내고 고생했던 동료다! 모두에게 선물세트를 선물한다.", "B": "가장 고마웠던 동료와 상사에게만 조용히 선물한다." },
    10: { "title": "당신은 어떤 방식으로 휴식을 취하는가?,", "type": "SN", "A": "친구들을 만나 수다를 떨고 놀면서 스트레스를 풀면 어떤 휴식보다 좋다.", "B": "휴식이란 혼자서 쉬는 것이다! 휴식을 위해 조용히 혼자의 시간을 보낸다." },
    11: { "title": "친구가 무언가에 대해 고민을 하고 있다! 다른 사람의 문제에 있어 당신의 반응은 어떠한가?", "type": "TF", "A": "이렇게 해보면 어떨까? 하며 문제의 원인을 살펴보고 다양한 의견을 제시한다", "B": "많이 힘들었지? 하며 고민 대해 공감하며 위로해준다." },
    12: { "title": "당신은 여러사람이 모여 있을 때, 대화를 이끌어 가는가?", "type": "JP", "A": "다른 사람을 먼저 배려해서 사람들의 의견을 듣는편이다.", "B": "분위기를 살리기 위해서 주도해서 말하는 편이다." },
}

// 결과
var result = {
    "ISTJ": { "animal": "거북이", "explain": "거북이는 차근차근 계획적으로 움직이고 진득한 유형", "img": "./img/turtle.jpg" },
    "ISFJ": { "animal": "코뿔소", "explain": "코뿔소는 자신의 영역을 잘 지킴으로 매우 신중하기 때문에 리더의 강략한 조력자", "img": "./img/rhino.jpg" },
    "INFJ": { "animal": "팬더", "explain": "팬더는 매우 매력적이어서 신비롭기까지한 유형의 예언자", "img": "./img/panda.jpg" },
    "INTJ": { "animal": "호랑이", "explain": "호랑이는 용감하고 용맹스러워 독립심이 강한유형으로 호기심이 많은 전략가", "img": "./img/tiger.jpg" },
    "ISTP": { "animal": "뱀", "explain": "뱀은 기본적으로 지혜롭지만 때로는 교활해 다른 사람의 비난을 받기도하는 예측불가 유형", "img": "./img/snake.jpg" },
    "ISFP": { "animal": "고양이", "explain": "고양이는 내성적이고 감정이 풍부하여 호기심이 많은 만능 재주꾼", "img": "./img/cat.jpg" },
    "INFP": { "animal": "물개", "explain": "물개는 이성주의자 유형이면서도 망상가 기질을 가지고 있는 유형", "img": "./img/seal.jpg" },
    "INTP": { "animal": "부엉이", "explain": "부엉이는 주관이 뚜렷한 유형으로 건설적인 사색가 유형", "img": "./img/owl.jpg" },
    "ESTP": { "animal": "하이에나", "explain": "하이에나는 친해지려해도 친해질수 없는 기회주의자 유형", "img": "./img/hyena.jpg" },
    "ESFP": { "animal": "돌고래", "explain": "돌고래는 스타성을 지닌 자유로운 영혼의 사교적인 유형", "img": "./img/dolphin.jpg" },
    "ENFP": { "animal": "오랑우탄", "explain": "오랑우탄은 자유롭고 즉흥적이며 불꽃같은 유형", "img": "./img/orangutan.jpg" },
    "ENTP": { "animal": "앵무새", "explain": "앵무새는 매력적이고 뛰어난 긍정적인 발명가 유형", "img": "./img/parrot.jpg" },
    "ESTJ": { "animal": "늑대", "explain": "늑대는 공격적이며 도전적이어서 사업가 유형", "img": "./img/wolf.jpg" },
    "ESFJ": { "animal": "코끼리", "explain": "코끼리는 온순하고 친화력이 좋아 사교적인 유형", "img": "./img/elephant.jpg" },
    "ENFJ": { "animal": "강아지", "explain": "강아지는 충성스럽고 믿음직스러우며 언변의 달인 유형", "img": "./img/dog.jpg" },
    "ENTJ": { "animal": "사자", "explain": "사자는 타고난 리더십으로 카리스마와 자신감이 넘치는 지도자 유형", "img": "./img/lion.jpg" },
}

// 문제 시작 버튼 click event
function start() {
    $(".start").hide();
    $(".question").show();
    document.body.style.background = "url('img/img1.gif') no-repeat 0 0";
    nextQuestion();
}

// 답변 click event
$("#A").click(function () {
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1);
    nextQuestion();
});

$("#B").click(function () {
    nextQuestion();
});

// 다음 문제 넘어가기 event
function nextQuestion() {
    if (num == 13) {
        $(".question").hide();
        $(".result").show();

        // 모든 물음이 끝났을 때, mbti 결과가 나오는 logic
        var mbti = "";
        ($("#EI").val() < 2) ? mbti += "I" : mbti += "E";
        ($("#SN").val() < 2) ? mbti += "N" : mbti += "S";
        ($("#TF").val() < 2) ? mbti += "F" : mbti += "T";
        ($("#JP").val() < 2) ? mbti += "P" : mbti += "J";
        // alert(mbti);

        // 동물이미지, 동물이름, 동물설명 모두 mbti 결과에 맞게 변해야하므로, result의 list에서 가져온다
        $("#img").attr("src", result[mbti]["img"]);
        $("#animal").html(result[mbti]["animal"]);
        $("#explain").html(result[mbti]["explain"]);
        console.log(result[mbti]["explain"])

    } else {
        // 마지막 문제 때, 굳이 수행할 필요 없으므로 else로 묶음
        $(".progress-bar").attr('style', 'width: calc(100/12*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}
