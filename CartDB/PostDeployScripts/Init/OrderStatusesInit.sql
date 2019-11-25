IF NOT EXISTS (SELECT 1 FROM OrderStatuses WHERE Status = 'Waiting')
BEGIN
    INSERT INTO OrderStatuses (Id, Status)
    VALUES (1, 'Waiting');
END

IF NOT EXISTS (SELECT 1 FROM OrderStatuses WHERE Status = 'Approved')
BEGIN
    INSERT INTO OrderStatuses (Id, Status)
    VALUES (2, 'Approved');
END

IF NOT EXISTS (SELECT 1 FROM OrderStatuses WHERE Status = 'Declined')
BEGIN
    INSERT INTO OrderStatuses (Id, Status)
    VALUES (3, 'Declined');
END

IF NOT EXISTS (SELECT 1 FROM OrderStatuses WHERE Status = 'Dispute')
BEGIN
    INSERT INTO OrderStatuses (Id, Status)
    VALUES (4, 'Dispute');
END