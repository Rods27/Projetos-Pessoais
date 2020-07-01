#Emprestimo de 1000, 36 meses, 1% ao mes
n1 = float(input('Qual o valor do empréstimo? '))
n2 = int(input('Quantas parcelas? '))
n3 = float(input('Digite a quantidade de júros ao mês. '))
for c in range(0, n2):
    n1 += n1 * 1 / 100
    print(f'o valor do mes {c+1} será {n1 + (n1 * 1/100):.2f}')
