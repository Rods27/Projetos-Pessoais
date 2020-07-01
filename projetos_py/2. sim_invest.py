invest= float(input('Qual o valor total a ser investido? '))
tempo = int(input('Qual o periodo de investimento(Mês)? '))
taxa = float(input('Qual a taxa de juros mensal? '))
aporte = float(input('Qual seu aporte por mensal? '))
ganho = 0
meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
         'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
c = 0
for a in range(0, tempo+1):
    invest = aporte + invest+(invest*taxa/100)
    print(f'No mês {meses[c]} você terá {invest:.2f}')
    c += 1
    if c == 12:
        c = 0
