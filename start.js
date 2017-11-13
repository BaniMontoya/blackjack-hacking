var lade = 0;
var stop = false;
var max = 2;
function beep() {
    var snd = new Audio("arquivo de audio o convertido a base64");  
    snd.play();
}
beep();
jQuery('#footer-links > li:nth-child(8) > i').click();

function jugar()
{
    if (stop == false)
    {
        var score_cliente = $(
                '#blackjack > div.game.deal-speed-medium.game-state-playing > div > div.player-hands.area > div.player-hand.player-hand-3 > div.main-hand.ng-scope > div > div.stats.ng-scope > span.score.ng-binding'
            )
            .html();
        var stand = $('#blackjack > div.control > div > div.action-area > div:nth-child(3)');
        var hit = $('#blackjack > div.control > div > div.action-area > div:nth-child(2)');
        var gameover = $('#blackjack > div.game.deal-speed-medium.game-state-game-over > div > div.overall-result > span > span')
            .html();
        var win = $(
                '#blackjack > div.game.deal-speed-medium.game-state-game-over > div > div.player-hands.area > div.player-hand.player-hand-3 > div.main-hand.ng-scope > div.result.ng-scope > span.outcome.ng-binding'
            )
            .html();
        var push = $(
                '#blackjack > div.game.deal-speed-medium.game-state-game-over > div > div.player-hands.area > div.player-hand.player-hand-3 > div.main-hand.ng-scope > div.result.ng-scope > span.outcome.ng-binding'
            )
            .html;
        var doblar = $('#blackjack > div.control > div > div.bet-area > div > div:nth-child(2)');
        var mitad = $('#blackjack > div.control > div > div.bet-area > div > div:nth-child(3)');
        var deal = $('#blackjack > div.control > div > div.action-area > div:nth-child(1)');
        var insurance = $(
                '#blackjack > div.game.deal-speed-medium.game-state-insurance > div > div.player-hands.area > div.player-hand.player-hand-3 > div.insurance-dialog.ng-scope > span.insurance-choice.insurance-no'
            )
            .click();
        var blackjack = $(
            '#blackjack > div.game.deal-speed-medium.game-state-game-over > div > div.player-hands.area > div.player-hand.player-hand-3 > div.main-hand.ng-scope > div.result.ng-scope > span.outcome.ng-binding'
        );
        var dealer = $('#blackjack > div.game.deal-speed-medium.game-state-playing > div > div.dealer-hand.area > div > div.stats.ng-scope > span');
        if (win == "win")
        {
            lade = 0;
            console.log("win");
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
        }
        if (blackjack == "blackjack" || blackjack == "BLACKJACK")
        {
            console.log("win");
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
            mitad.click();
        }
        if (gameover == "Game Over")
        {
            console.log("lost");
            if (lade > max)
            {
                var continuar;
                //beep();
                var r = confirm("Lade 3 seguro quieres continuar?");
                if (r == true)
                {
                    lade = 0;
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    mitad.click();
                    deal.click();
                }
                else
                {
                    alert("Cancelado el bot, sera cuestion de aumentar el lade ?");
                    stop = true;
                }
            }
            else
            {
                console.log("continuamos");
                doblar.click();
                deal.click();
                lade = lade + 1;
                console.log(lade);
            }
        }
        if (push == "push")
        {
            console.log("push");
        }
        if (score_cliente == "" || score_cliente == undefined)
        {
            if (stop == false)
            {
                console.log("deal");
                deal.click();
            }
        }
        else
        {
            if (stop == false)
            {
                if (Number(score_cliente) >= 17 || score_cliente == "1/21" || score_cliente == "10/20" || score_cliente == "8/18"|| score_cliente == "7/17"|| score_cliente == "9/19"|| score_cliente == "11/21")
                {
                    //if (Number(score_cliente) >= 19)
                   // {
                     //   doblar.click();
                       // console.log("stand");
                   // }
                    stand.click();
                    console.log("stand");
                }
                else
                {
                    if (Number(dealer) < 7 && Number(score_cliente) > 15)
                    {
                        stand.click();
                        console.log("stand");
                    }
                    else
                    {
                        hit.click();
                        console.log("hit");
                    }
                }
            }
        }
    }
}
setInterval('jugar()', 7200);

